import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import AmericanFlag from './images/Flag-USA.svg';
import UKFlag from './images/Flag-UK.svg';

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
`

const ProfessionalProfileBlockContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 4vw;
    align-items: center;
    background-color: ${theme.colors.primaryAccent};
    border-radius: 5px;
`

const ProfessionalProfileContent = styled.div`
    width: 100%;
    @media (width > ${theme.breakpoints.tablet}) {
        width: 75%;
    }
`

const ProfessionalProfileContainer = styled.div`
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`


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
`

const ProfessionalProfileBlurb = styled.div`
    flex-grow: 1;
    padding-left: 10%;
    padding-right: 10%;
`

const Flags = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    align-items: flex-start;
    justify-content: center;
`

const Flag = styled.img`
    width: 35%;
    min-width: 300px;
    min-height: 100px;
    max-height: 100%;
    margin: 10px;
`

function ProfessionalProfileBlock() {

    return (
        <ProfessionalProfileSection id="professionalprofile">
            <ProfessionalProfileBlockContainer>
                <ProfessionalProfileContent>
                    <ProfessionalProfileContainer>
                        <Title>Professional Profile</Title>
                        <ProfessionalProfileBlurb>
                            <p>I have been working on software development for over 15 years.  I am a 50/50 manager-to-engineer split as I love leading people and writing code equally.</p>
                            <p>I have extensive experience in leading teams and building full-stack software.  I am also a certified scrum master and am currently developing skills and knowledge in AI integrations and ML.</p>
                            <p>Historically my strength is backend engineering with a specialty in cloud computing.  However, these days it doesn't really matter what I work on; I just love being an engineer.</p>
                            <p>I also have dual citizenship in the United States and the United Kingdom.  So, I am free to live and work in both countries without restriction.</p>
                        </ProfessionalProfileBlurb>
                        <Flags>
                            <Flag src={AmericanFlag} />
                            <Flag src={UKFlag} />
                        </Flags>
                    </ProfessionalProfileContainer>
                </ProfessionalProfileContent>
            </ProfessionalProfileBlockContainer>
        </ProfessionalProfileSection>
    )
}

export default ProfessionalProfileBlock;