/* eslint-disable no-shadow */
import React from 'react';
import styled, { css } from 'styled-components';

// eslint-disable-next-line no-shadow
export enum CursorDisplay {
//eslint-disable-next-line no-unused-vars
    Stable = 'stable',
    //eslint-disable-next-line no-unused-vars
    Blink = 'blink',
    //eslint-disable-next-line no-unused-vars
    Hidden = 'hidden'
}

type CursorDivProps = {
    $cursordisplay: string;
}

const CursorDiv = styled.div<CursorDivProps>`
    @keyframes blinker {
        50% {
            border-color: transparent;
        }
    }
    padding-right: 3px;
    border-left: none;
    display: none;
    ${props => props.$cursordisplay === CursorDisplay.Stable && css`
        display: inline-block;
        border-left: 2px solid white;
    `}
    ${props => props.$cursordisplay === CursorDisplay.Blink && css`
        display: inline-block;
        border-left: 2px solid white;
        animation: blinker 0.5s step-end 0s infinite normal none running;
    `}
`;

type CursorProps = {
    id?: string;
    cursorDisplay: CursorDisplay;
    index?: number;
}

function Cursor ({ id, cursorDisplay }: CursorProps) {
  // console.log(`Cursor(${index}): cursorDisplay = ${cursorDisplay}`)
  return (
    <CursorDiv
      id={id}
      key={id}
      $cursordisplay={cursorDisplay}>
            &nbsp;
    </CursorDiv>
  );
}

export default Cursor;
