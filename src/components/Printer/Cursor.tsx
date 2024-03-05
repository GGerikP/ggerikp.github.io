import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export enum CursorDisplay {
    Stable = "stable",
    Blink = "blink",
    Hidden = "hidden"
}

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

type CursorDivProps = {
    $cursordisplay: string;
}

const CursorDiv = styled.div<CursorDivProps>`
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
        animation: ${blink} .5s step-end infinite;
    `}
`

type CursorProps = {
    cursorDisplay: CursorDisplay;
    index: number;
}

function Cursor({cursorDisplay, index}: CursorProps) {
    // console.log(`Cursor(${index}): cursorDisplay = ${cursorDisplay}`)
    return (
        <CursorDiv id={`Cursor:${index}`} $cursordisplay={cursorDisplay}>&nbsp;</CursorDiv>
    )
}

export default Cursor;