import React from 'react';
import styled from 'styled-components';
import Terminal from '../../components/Terminal';
import theme from '../../theme';
import { Line } from '../../components/Printer/LinePrinter';

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
    { segments: [{ text: "Loading: Gerik Peterson's Playground", postPrintDelay: 250 },
        {text: ".", postPrintDelay: 100 },
        {text: ".", postPrintDelay: 100 },
        {text: ".", postPrintDelay: 50 },
        {text: ".", postPrintDelay: 50 }] },
    { segments: [{ text: "", postPrintDelay: 100 }] },
    { segments: [{ text: "Hey there!  Welcome to my site.", postPrintDelay: 750 }] },
    { segments: [{ text: "", postPrintDelay: 100 }] },
    { segments: [{ text: "Ok, so what is this thing?", postPrintDelay: 750 }] },
    { segments: [{ text: "", postPrintDelay: 100 }] },
    { segments: [{ text: `This is my personal website and software development playground.`, postPrintDelay: 300 }] },
    { segments: [{ text: `It's mostly just a place for me to try things out and have a domain to use when I need it.`, postPrintDelay: 500 }] },
    { segments: [{ text: "", postPrintDelay: 100 }] },
    {
        segments: [{ text: "If you want to learn more about my professional life you might check my " },
        { text: "linkedin", link: "https://www.linkedin.com/in/gerikpeterson/" },
        { text: " profile.", postPrintDelay: 300 }]
    },
    { segments: [{ text: "", postPrintDelay: 0 }] },
    { segments: [{ text: "Otherwise, enjoy looking around.", postPrintDelay: 200 }] },
    { segments: [{ text: "And I hope you have a most excellent day!", postPrintDelay: 0 }] },
    { segments: [{ text: "", postPrintDelay: 0 }] },
    { segments: [{ text: "--------------", postPrintDelay: 0 }] },
    { segments: [{ text: "", postPrintDelay: 0 }] },
    { segments: [{ text: "Take me to....", postPrintDelay: 0 }] },
    { segments: [{ text: "Professional Profile", link: "#cv", postPrintDelay: 0 }] },
    { segments: [{ text: "Professional Experience", link: "#cv", postPrintDelay: 0 }] },
    { segments: [{ text: "My Values", link: "#values" }] },
    { segments: [{ text: "", postPrintDelay: 0 }] },
    { segments: [{ text: "", postPrintDelay: 0 }] },
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