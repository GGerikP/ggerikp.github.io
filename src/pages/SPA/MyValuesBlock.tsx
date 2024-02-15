import React from 'react';
import styled from 'styled-components';

const MyValuesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
    background-color: #B7DDF0;
    padding: 5%;
`

const ValuesBlock = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 33%;
    margin-bottom: 20px;
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
            <ValuesBlock>
                <MyValuesParagraph style={{ textAlign: 'center' }}>
                    <h1>Personal Values</h1>
                    <hr />
                    <ValuesList>
                        <li>Stay Positive.</li>
                        <li>Be Honest.</li>
                        <li>Be Strong.</li>
                        <li>Keep yourself healthy (physically and mentally).</li>
                        <li>Look after your mental health.</li>
                        <li>Be a Person of Integrity.</li>
                        <li>Make it happen.</li>
                        <li>Vulnerability is OK.</li>
                        <li>Own Your Mistakes.</li>
                        <li>Love learning.</li>
                        <li>Be a teacher to everyone.</li>
                    </ValuesList>
                </MyValuesParagraph>
            </ValuesBlock>
            <ValuesBlock>
                <MyValuesParagraph style={{ textAlign: 'center' }}>
                    <h1>In Management</h1>
                    <hr />
                    <ValuesList>
                        <li>Care about everyone.</li>
                        <li>Empower everyone.</li>
                        <li>Be a leader, not a manager.</li>
                        <li>Take responsibility.</li>
                        <li>Keep Your Reports Happy.</li>
                        <li>Inclusion is key (silo no-one).</li>
                        <li>Appreciate your knowledge.</li>
                        <li>Produce Quality Work.</li>
                        <li>Vulnerability is OK.</li>
                        <li>Keep strength and modesty balanced.</li>
                    </ValuesList>
                </MyValuesParagraph>
            </ValuesBlock>
            <ValuesBlock>
                <MyValuesParagraph style={{ textAlign: 'center' }}>
                    <h1>As an Engineer</h1>
                    <hr />
                    <ValuesList>
                        <li>Leave your ego at the door.</li>
                        <li>Focus on Value.</li>
                        <li>Get it done.</li>
                        <li>Innovate.</li>
                        <li>Love to learn.</li>
                        <li>Dummy-proof everything.</li>
                        <li>Apply Security Everywhere.</li>
                        <li>Testing is included.</li>
                        <li>We work as a team.</li>
                        <li>Nothing will ever be perfect.</li>
                        <li>Always be Pro-active.</li>
                    </ValuesList>
                </MyValuesParagraph>
            </ValuesBlock>
        </MyValuesContainer>

    )
}

export default MyValuesBlock;