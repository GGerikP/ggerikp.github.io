import React from 'react';
import styled from 'styled-components';
import BackgroundClouds from './images/background-clouds-large.jpg';
import theme from '../../theme';

const MyValuesContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
    background-color: #B7DDF0;
    padding: 5%;
    background-image: url(${BackgroundClouds});
    background-position: center;
    background-size: cover;
    line-height: 40px;
    border-radius: 20px;
    color: white;
    font-family: "Bebas Neue", sans-serif;
    font-size: 26px;
    z-index: 1;
    @media (width > ${theme.breakpoints.mobile}) {
        margin-left: 5%;
        margin-right: 5%;
    }
    h1 {
        font-family: ${theme.fonts.base};
        font-weight: 100;
        margin-top: 20px;
    }
`;

const ValuesBlock = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 33%;
    margin-bottom: 20px;
    align-items: center;
`;

const MyValuesParagraph = styled.div`
    text-align: center;
`;

const ValuesList = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
`;


function MyValuesBlock () {
  return (
    <MyValuesContainer id="values">
      <ValuesBlock>
        <MyValuesParagraph style={{ textAlign: 'center' }}>
          <h1>Personal Values</h1>
          <hr />
          <ValuesList>
            <li>STAY POSITIVE.</li>
            <li>BE HONEST.</li>
            <li>BE STRONG.</li>
            <li>KEEP YOURSELF HEALTHY.</li>
            <li>LOOK AFTER YOUR MENTAL HEALTH.</li>
            <li>BE A PERSON OF INTEGRITY.</li>
            <li>MAKE IT HAPPEN.</li>
            <li>VULNERABILITY IS OK.</li>
            <li>OWN YOUR MISTAKES.</li>
            <li>LOVE LEARNING.</li>
            <li>BE A TEACHER TO THE WORLD.</li>
          </ValuesList>
        </MyValuesParagraph>
      </ValuesBlock>
      <ValuesBlock>
        <MyValuesParagraph style={{ textAlign: 'center' }}>
          <h1>In Management</h1>
          <hr />
          <ValuesList>
            <li>CARE ABOUT EVERYONE.</li>
            <li>EMPOWER EVERYONE.</li>
            <li>BE A LEADER, NOT A MANAGER.</li>
            <li>ADULTS DON'T EXIST, ONLY OLDER CHILDREN.</li>
            <li>TAKE RESPONSIBILITY.</li>
            <li>KEEP YOUR REPORTS HAPPY.</li>
            <li>INCLUSION IS KEY (SILO NO-ONE).</li>
            <li>APPRECIATE YOUR KNOWLEDGE.</li>
            <li>PRODUCE QUALITY WORK.</li>
            <li>BALANCE CONFIDENCE AND MODESTY.</li>
          </ValuesList>
        </MyValuesParagraph>
      </ValuesBlock>
      <ValuesBlock>
        <MyValuesParagraph style={{ textAlign: 'center' }}>
          <h1>As an Engineer</h1>
          <hr />
          <ValuesList>
            <li>LEAVE YOUR EGO AT THE DOOR.</li>
            <li>FOCUS ON VALUE.</li>
            <li>GET IT DONE.</li>
            <li>INNOVATE.</li>
            <li>LOVE TO LEARN.</li>
            <li>DUMMY-PROOF EVERYTHING.</li>
            <li>APPLY SECURITY EVERYWHERE.</li>
            <li>TESTING IS INCLUDED.</li>
            <li>WE WORK AS A TEAM.</li>
            <li>NOTHING WILL EVER BE PERFECT.</li>
            <li>ALWAYS BE PRO-ACTIVE.</li>
          </ValuesList>
        </MyValuesParagraph>
      </ValuesBlock>
    </MyValuesContainer>

  );
}

export default MyValuesBlock;