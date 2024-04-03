import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import styled from 'styled-components';
import theme from '../../theme';
import terminatorPrefsIcon from './images/terminator-prefs-icon.jpeg';
import ParagraphPrinter from '../Printer/ParagraphPrinter';
import { Line } from '../Printer/LinePrinter';
import { PrintingState } from './Terminal';
import { CursorDisplay } from '../Printer/Cursor';
import config from '../../config';

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
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    color: white;
    white-space: pre-wrap;
`;
const PromptInput = styled.input`
    height: 25px;
    width: 100%;
    background-color:rgba(0, 0, 0, 1);
    color: white;
    padding-left: 10px;
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
type ChatGPTResponse = {
    message: {
        index: number,
        message: {
            role: string,
            content: string,
        },
        logprobs: string | undefined,
        finish_reason: string
    }[]
}
type TabProps = {
    id?: string,
    lines?: Line[],
    promptChars: string,
    instantPrint?: boolean,
}

function Tab ({ id, lines, promptChars, instantPrint }: TabProps) {

  const tabTitle = 'gerik@peterson:~'; // To be made configurable in the future if we want
  const [printerKey, setPrinterKey] = useState<number>(0);
  const [terminalText, setTerminalText] = useState<Line[] | undefined>(lines);
  const [printingState, setPrintingState] = useState<PrintingState>(PrintingState.NOT_STARTED);
  const insideOutsideRefElement = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState<string>('');
  const [chatGPTPrompt, setChatGPTPrompt] = useState<ChatGPTPrompt>({ messages: [] });
  const terminalID = (id ? id + '-' : '') + printerKey.toString();

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
    updateTerminalText(inputText);
    if (inputText && inputText !== '') {
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
    setPrintingState(PrintingState.PRINTING);
    if (chatGPTPrompt.messages.length === 0 || chatGPTPrompt.messages[chatGPTPrompt.messages.length - 1].role !== 'user') {
      // Don't do anything if we don't have any messages to send or if the last message wasn't from the user
      return;
    }
    const fetchData = async () => {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      const data: LambdaHandlerRequest = { data: { chatGPTMessages: chatGPTPrompt } };

      try {
        const response: AxiosResponse = await axios.post(config.chatGPT.models.default.url, data, headers);
        const chatGPTResponse: ChatGPTResponse = response.data;
        const chatGPTResponseText = chatGPTResponse.message[0].message.content;
        updateTerminalText(chatGPTResponseText);
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
        if (error.response?.status === 429) {
          updateTerminalText('We\'re sorry but we\'ve received too many requests.  Please try again in a few minutes.');
        } else {
          updateTerminalText('We\'re sorry but something has gone wrong.  Please try re-submitting your message.');
        }
      }
    };
    fetchData();
  }, [chatGPTPrompt, updateTerminalText]);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleClickInside = () => {
    const inputElement = insideOutsideRefElement.current?.querySelector<HTMLInputElement>(`#input-${terminalID}`);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <TabContainer>
      <TabTitleBar>
        <TabIcon src={terminatorPrefsIcon} />
        <TabTitle>{tabTitle}</TabTitle>
        <ReprintButton onClick={handleClick}>Reprint</ReprintButton>
      </TabTitleBar>
      <LinesContainer ref={insideOutsideRefElement} onClick={handleClickInside}>
        {
          terminalText ?
            <ParagraphPrinter
              key={terminalID}
              id={terminalID}
              lines={terminalText}
              typingSpeed={35}
              promptChars={promptChars}
              instantPrint={instantPrint ?? false}
              setPrintingState={setPrintingState}
              finalCursorDisplay={CursorDisplay.Hidden}
            />
            : <></>
        }
        <PromptWrapper>
          {printingState === PrintingState.NOT_STARTED || printingState === PrintingState.PRINTING
            ? <></> :
            <>
              <span>{promptChars}</span>
              {printingState === PrintingState.DONE &&
                                <PromptInput
                                  id={`input-${terminalID}`}
                                  type="text"
                                  value={inputText}
                                  onChange={(e) => setInputText(e.target.value)}
                                  onKeyUp={handleKeyUp}
                                  placeholder={'Type here to find out more about me...'}
                                  autoFocus>
                                </PromptInput>
              }
            </>
          }

        </PromptWrapper>
      </LinesContainer>
    </TabContainer>
  );
}

export default Tab;