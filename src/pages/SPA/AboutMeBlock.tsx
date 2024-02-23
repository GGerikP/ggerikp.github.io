import React from 'react';
import styled from 'styled-components';
import Terminal from '../../components/Terminal';
import { Line } from '../../components/IntegratedParagraphPrinter';
import theme from '../../theme';

const AboutMeContainer = styled.div`
    display: flex;
    justify-content: center;
    // height: 100vh;
    //background-color: #FFEFC6;
    padding-right: 3%;
    @media (width > ${theme.breakpoints.mobile}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    margin-bottom: 50px;
`

const AboutMeText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 100%;
    justify-content: center;
`

const AboutMeParagraph = styled.div`
    text-align: center;
`


const aboutMeText: Line[] = [
    { lineSegments: [{ text: "Loading: Gerik Peterson's Playground.", printDelayAfter: 750 },
        {text: ".", printDelayAfter: 200 },
        {text: ".", printDelayAfter: 100 },
        {text: ".", printDelayAfter: 50 },
        {text: ".", printDelayAfter: 50 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "Hey there!  Welcome to my site.", printDelayAfter: 750 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "Ok, so what is this thing?", printDelayAfter: 750 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: `This is my personal website and software development playground.`, printDelayAfter: 300 }] },
    { lineSegments: [{ text: `It's mostly just a place for me to try things out and have a domain to use when I need it.`, printDelayAfter: 500 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    {
        lineSegments: [{ text: "If you want to learn more about my professional life you might check my " },
        { text: "linkedin", link: "https://www.linkedin.com/in/gerikpeterson/" },
        { text: " profile.", printDelayAfter: 300 }]
    },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "Otherwise, I hope you enjoy looking around...", printDelayAfter: 200 }] },
    { lineSegments: [{ text: "And have a most excellent day!", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "--------------", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "Take me to....", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "Professional Profile", link: "#cv", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "Professional Experience", link: "#cv", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "My Values", link: "#values" }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
    { lineSegments: [{ text: "", printDelayAfter: 0 }] },
];

function AboutMeBlock() {
    return (
        <AboutMeContainer id="about">
            <AboutMeText>
                <AboutMeParagraph style={{ textAlign: 'center' }}>
                    <Terminal lines={aboutMeText} instantPrint={false}/>
                </AboutMeParagraph>
            </AboutMeText>
        </AboutMeContainer>
    )
}

export default AboutMeBlock;