import React, { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import styled from 'styled-components';
import theme from '../../theme';
import terminatorPrefsIcon from './images/terminator-prefs-icon.jpeg';
import ParagraphPrinter from '../Printer/ParagraphPrinter';
import { Line } from '../Printer/LinePrinter';
import { CursorDisplay } from '../Printer/Cursor';
import config from '../../config';
import LoadingGif from './images/loading.gif';

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    border-radius: 0px 0px 10px 10px;
    p, span {
        color: ${theme.colors.primary};
        text-align: left;
    }
`;

const TabTitleBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    width: 100%;
    position: relative;
    line-height: 25px;
    height: 25px;
    padding: 5px;
`;

const TabIcon = styled.img`
`;

const TabTitle = styled.p`
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const ReprintButton = styled.button`
    color: black;
    background-color: ${theme.colors.primaryAccent};
    height: 20px;
    font-size: 12px;
    border-radius: 3px;
`;

const LinesContainer = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
const PromptWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    color: white;
    white-space: pre-wrap;
    height: 35px;
    align-items: center;
`;
const PromptInput = styled.input`
    height: 35px;
    flex-grow: 1;
    background-color:rgba(0, 0, 0, 1);
    color: white;
    padding-left: 10px;
`;

const SubmitInputButton = styled.button`
    color: black;
    background-color: white;
    height: 25px;
    font-size: 12px;
    border-radius: 3px;
    min-width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: url(${LoadingGif}) no-repeat center center;
  background-size: cover;
`;

type UserMessage = {
    role: 'user',
    content: string
}
type AssistantMessage = {
    role: 'assistant',
    conent?: string,
    name?: string,
    tool_calls?: string
}
type ChatGPTPrompt = {
    messages: (UserMessage | AssistantMessage)[];
}
type LambdaHandlerRequest = {
    data: {
        chatGPTMessages?: ChatGPTPrompt,
    }
}
type ChatGPTMessage = {
    index: number,
    message: {
        role: string,
        content: string,
    },
    logprobs: string | undefined,
    finish_reason: string
}
type ChatGPTMessages = {
  message: ChatGPTMessage[];
}
type ChatGPTResponse = {
  statusCode?: number;
  body?: string;
  message?: ChatGPTMessage[];
}

type TabProps = {
    id?: string;
    lines?: Line[];
    promptChars: string;
    instantPrint?: boolean;
}

function Tab ({ id, lines, promptChars, instantPrint }: TabProps) {

  const tabTitle = 'gerik@peterson:~'; // To be made configurable in the future if we want
  const [printerKey, setPrinterKey] = useState<number>(0);
  const [terminalText, setTerminalText] = useState<Line[] | undefined>(lines);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [chatGPTPrompt, setChatGPTPrompt] = useState<ChatGPTPrompt>({ messages: [] });
  const tabID = (id ? id + '-' : '') + 'Tab' + printerKey.toString();

  const handleClick = () => {
    setPrinterKey(prevKey => prevKey + 1);
  };

  const formatTerminalTextLine = (text: string): Line => {
    return { segments: [{ text: text }] };
  };

  const updateTerminalText = useCallback((text: string): void => {
    setTerminalText(prevTerminalText => {
      const updatedTerminalText = prevTerminalText
                && text
        ? [...prevTerminalText, formatTerminalTextLine(text)]
        : prevTerminalText;
      return updatedTerminalText;
    });
  }, [setTerminalText]);

  const handleSubmit = () => {
    if (inputText && inputText !== '') {
      setIsPrinting(true);
      updateTerminalText('You: ');
      updateTerminalText(inputText);
      updateTerminalText(' ');
      updateTerminalText('Assistant:');
      setIsLoading(true);
      setChatGPTPrompt(prevChatGPTPrompt => {
        return {
          messages: [
            ...prevChatGPTPrompt.messages,
            { role: 'user', content: inputText }
          ]
        };
      });
    }
    setInputText('');
  };

  useEffect(() => {
    if (chatGPTPrompt.messages.length === 0 
      || chatGPTPrompt.messages[chatGPTPrompt.messages.length - 1].role !== 'user') {
      // Don't do anything if we don't have any messages to send or if the last message wasn't from the user
      return;
    }
    const fetchData = async () => {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      const data: LambdaHandlerRequest = { data: { chatGPTMessages: chatGPTPrompt } };

      try {
        // console.log(`config.chatGPT.models.default.url = ${config.chatGPT.models.default.url}`);
        const response: AxiosResponse = await axios.post(config.chatGPT.models.default.url, data, headers);
        const chatGPTResponse: ChatGPTResponse = response.data;
        const chatGPTResponseText = chatGPTResponse.message 
          ? chatGPTResponse.message[0].message.content : 
          (() => {
            if (chatGPTResponse.body) {
              const messageString: ChatGPTMessages = JSON.parse(chatGPTResponse.body) as ChatGPTMessages;
              return messageString.message[0].message.content;
            }
            throw new Error ('CANNOT FIND CHATGPT RESPONSE STRING');
          })();
        (chatGPTResponseText.split('\n')).forEach((line: string) => {
          if (line === '') {
            updateTerminalText(' ');
          } else {
            updateTerminalText(line);
          }
        });
        updateTerminalText(' ');
        setChatGPTPrompt(prevChatGPTPrompt => {
          return {
            messages: [
              ...prevChatGPTPrompt.messages,
              { role: 'assistant', content: chatGPTResponseText }
            ]
          };
        });
      } catch (err) {
        const error = err as AxiosError;
        console.log(`Error = ${error}`);
        console.log(`error.response?.status = ${error.response?.status}`);
        if (error.response?.status === 429) {
          updateTerminalText('I\'m sorry but I seem to be a bit overloaded!  Please try again in a minute or two.');
        } else {
          updateTerminalText('I\'m sorry but something has gone wrong in handling your message.  Please try re-submitting it.');
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, [chatGPTPrompt, updateTerminalText]);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <TabContainer>
      <TabTitleBar>
        <TabIcon src={terminatorPrefsIcon} />
        <TabTitle>{tabTitle}</TabTitle>
        <ReprintButton onClick={handleClick}>Reprint</ReprintButton>
      </TabTitleBar>
      <LinesContainer >
        {
          terminalText ?
            <ParagraphPrinter
              key={tabID}
              id={tabID}
              lines={terminalText}
              typingSpeed={35}
              promptChars={promptChars}
              instantPrint={instantPrint ?? false}
              setPrintingState={setIsPrinting}
              finalCursorDisplay={CursorDisplay.Hidden}
            />
            : <></>
        }
        <PromptWrapper>
          {isPrinting ? <></> : isLoading ? 
            <>
              {promptChars}
              &nbsp;<LoadingSpinner aria-label="Loading" />
            </> :
            <>
              {promptChars}
              <PromptInput
                id={`input-${tabID}`}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder={'Ask me something about Gerik...'}>
              </PromptInput>
              <SubmitInputButton onClick={handleSubmit}>Submit</SubmitInputButton>
            </>
          }
        </PromptWrapper>
      </LinesContainer>
    </TabContainer>
  );
}

export default Tab;