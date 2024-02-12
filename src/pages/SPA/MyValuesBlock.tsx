import React from 'react';
import styled from 'styled-components';

const MyValuesContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #B7DDF0;
    padding: 5%;
`

const MyValuesText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 50%;
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