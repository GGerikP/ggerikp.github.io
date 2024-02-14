import React from 'react';
import styled from 'styled-components';

const MyValuesContainer = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    background-color: #B7DDF0;
    padding: 5%;
`

const MyValuesText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 75%;
`

const MyValuesParagraph = styled.div`
    text-align: center;
`

const ValuesList = styled.ol`
    list-style: none;
`


function MyValuesBlock() {
    return (
        <MyValuesContainer id="values">
            <MyValuesText>
                <MyValuesParagraph style={{ textAlign: 'center' }}>
                    <h1>My Values</h1>
                    <hr />
                    <p>
                        There is so much I could put here.  Please be patient with me as I figure out what exactly I how exactly I want to write this up. :-)
                    </p>
                    <hr />
                    <p>Here's something generic for now:</p>
                    <ValuesList>
                        <li>Stay Positive</li>
                        <li>Be Honest</li>
                        <li>Be a Person of Integrity</li>
                        <li>Focus On Value</li>
                        <li>Produce Quality Work</li>
                        <li>Vulnerability is OK</li>
                        <li>Own Your Mistakes</li>
                        <li>Project Your Strength</li>
                    </ValuesList>
                </MyValuesParagraph>
            </MyValuesText>
        </MyValuesContainer>

    )
}

export default MyValuesBlock;