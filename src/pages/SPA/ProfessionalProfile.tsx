import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import AmericanFlag from './images/Flag-USA.svg';
import UKFlag from './images/Flag-UK.svg';
import Link from '../../components/Link';

const ProfessionalProfileSection = styled.section`
    width: 100%;
    min-width: 350px;
    z-index: 1;
    @media (width > ${theme.breakpoints.mobile}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
`;

const ProfessionalProfileBlockContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 4vw;
    align-items: center;
    background-color: ${theme.colors.secondaryAccent};
    border-radius: 5px;
`;

const ProfessionalProfileContent = styled.div`
    width: 100%;
    @media (width > ${theme.breakpoints.tablet}) {
        width: 75%;
    }
`;

const ProfessionalProfileContainer = styled.div`
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;


const Title = styled.h1`
    width: 100%;
    min-width: 350px;
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-family: ${theme.fonts.base};
    font-weight: 100;

    &::before,
    &::after {
        display: inline-block;
        content: "";
        border-top: .3rem solid black;
        width: 6rem;
        margin: 0 1rem;
        transform: translateY(-0rem);
    }
`;

const ProfessionalProfileBlurb = styled.div`
    flex-grow: 1;
    padding-left: 10%;
    padding-right: 10%;
    p {
      font-size: 18px;
      width: 100%;
      flex-grow: 1;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    h2 {
      width: 100%;
      padding-bottom: 0;
      margin-bottom: 0;
    }
`;

const Flags = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    align-items: flex-start;
    justify-content: center;
`;

const Flag = styled.img`
    width: 25%;
    min-width: 300px;
    min-height: 100px;
    max-height: 100%;
    margin: 10px;
`;

const HorizontalRule = styled.hr`
    width: 100%;
`;

function ProfessionalProfileBlock () {

  return (
    <ProfessionalProfileSection id="professionalprofile">
      <ProfessionalProfileBlockContainer>
        <ProfessionalProfileContent>
          <ProfessionalProfileContainer>
            <Title>Professional Profile</Title>
            <ProfessionalProfileBlurb>
              <p>I have a Masters in Computer Science and have been working in software development for over 15 years.  I love leading people and writing code equally and have led a career swapping back and forth between the two (see more of my experience <Link url="/#cv">here</Link>).</p>
              <h2>Experience Summary</h2><HorizontalRule />
              <p>I have extensive experience in leading teams and building full-stack software.
                My strongest programming skills are in TypeScript and Python but I also love working with data and database systems.
                I am also a certified scrum master and am currently developing skills and knowledge in AI integrations and ML.
                Historically my strength is backend engineering with a specialty in cloud computing.  However, these days it doesn't really matter what I work on — I just love being an engineer! (check out some of my personal values as an engineer <Link url="/#values">here</Link>).</p>
              <h2>Dual Citizenship</h2><HorizontalRule />
              <p>I also have dual citizenship in the United States and the United Kingdom.  So, I am free to live and work in both countries without restriction.</p>
            </ProfessionalProfileBlurb>
            <Flags>
              <Flag src={AmericanFlag} alt="American Flag"/>
              <Flag src={UKFlag} alt="United Kingdom Flag"/>
            </Flags>
          </ProfessionalProfileContainer>
        </ProfessionalProfileContent>
      </ProfessionalProfileBlockContainer>
    </ProfessionalProfileSection>
  );
}

export default ProfessionalProfileBlock;