import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Link from '../../components/Link';
import AmericanFlag from './images/Flag-USA.svg';
import UKFlag from './images/Flag-UK.svg';

const ProfessionalProfileBlockContainer = styled.div`
    width: 100%;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vw;
    background-color: #FFF3D4;
    border-radius: 30px;
    padding-bottom: 20px;
    margin-bottom: 20px;
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


const Title = styled.div`
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
    max-height: 400px;
    align-items: flex-start;
    justify-content: center;
`

const Flag = styled.img`
    width: 45%;
    min-width: 300px;
    min-height: 100px;
    max-height: 100%;
    margin: 10px;
`

const FlagFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

function ProfessionalProfileBlock() {

    return (
        <ProfessionalProfileBlockContainer id="professionalprofile">
            <ProfessionalProfileContent>
                <ProfessionalProfileContainer>
                    <Title><h1>Professional Profile</h1></Title>
                    <ProfessionalProfileBlurb>
                        <p>I am a 50/50 manager-to-engineer split.  I love leading people and writing code equally, so my roles over the past 15 years have flip-flopped between these two.</p>
                        <p>Historically my strength is backend engineering, but these days it doesn't really matter what part of the stack I work on anymore.  I just love being an engineer.</p>
                        <p>It's also worth mentioning that I also have <strong>dual citizenship</strong> in the United States and the United Kingdom; so, I am free to work without restriction in both countries.</p>
                    </ProfessionalProfileBlurb>
                    <Flags>
                        <Flag src={AmericanFlag} />
                        <Flag src={UKFlag} />
                    </Flags>
                    <FlagFooter>
                        <p>(The different flag proportions are intentional. <Link url="https://en.wikipedia.org/wiki/List_of_aspect_ratios_of_national_flags">Check it out.</Link>)</p>
                    </FlagFooter>
                </ProfessionalProfileContainer>
            </ProfessionalProfileContent>
        </ProfessionalProfileBlockContainer>
    )
}

export default ProfessionalProfileBlock;