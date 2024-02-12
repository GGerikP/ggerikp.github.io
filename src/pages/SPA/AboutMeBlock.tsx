import React from 'react';
import styled from 'styled-components';
import Terminal from '../../components/Terminal';
import { Line } from '../../components/LinePrinter';
import theme from '../../theme';

const AboutMeContainer = styled.div`
    display: flex;
    justify-content: center;
    // height: 100vh;
    //background-color: #FFEFC6;
    padding-right: 3%;
    @media (width > ${theme.breakpoints.mobile}) {
        padding-right: 10%;
    }
    margin-bottom: 50px;
`

const AboutMeText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 100%;
`

const AboutMeParagraph = styled.div`
    text-align: center;
`


const aboutMeText: Line[] = [
    { lineSegments: [{ text: "Hey there!  Welcome to my site.", printDelayAfter: 1000 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "Ok, so what is this thing?", printDelayAfter: 1000 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: `This is my personal software development playground.`, printDelayAfter: 500 }] },
    { lineSegments: [{ text: `Really it's just a place for me to try things out and have a domain to use when I need it.`, printDelayAfter: 500 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    {
        lineSegments: [{ text: "If you want to learn more about my professional life you might check my " },
        { text: "linkedin", link: "https://www.linkedin.com/in/gerikpeterson/" },
        { text: " profile.", printDelayAfter: 0 }]
    },
];

function AboutMeBlock() {
    return (
        <AboutMeContainer id="about">
            <AboutMeText>
                <AboutMeParagraph style={{ textAlign: 'center' }}>
                    <Terminal lines={aboutMeText} />
                </AboutMeParagraph>
            </AboutMeText>
        </AboutMeContainer>
    )
}

export default AboutMeBlock;