import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import ExternalLink from '../../../components/ExternalLink';

const Container = styled.div`
    width: 90%;
    min-width: 350px;
    min-height: 350px;
    position: relative;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    @media (max-width > ${theme.breakpoints.tablet}) {
        width: 50%;
    }
`

interface JobBackgroundProps {
    $background?: string;
    $backgroundimage?: string;
}
const JobBackground = styled.div<JobBackgroundProps>`
    overflow: hidden;
    height: 0;
    min-height: 100%;
    width: 100%;
    border: 1px solid black;
    ${props => props.$background && css`
        background-color: ${props.$background};
    `}
    ${props => props.$backgroundimage && css`
        background-image: ${props.$backgroundimage};
    `}
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:hover {
        width: 115%;
        z-index: 1;
        height: auto;
        overflow: visible;
    }
    transition: width 0.3s ease, height 0.3s ease;
`

const LogoImage = styled.img`
    min-width: 250px;
    min-height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const JobContentCard = styled.div`
    overflow: hidden;
    width: 100%;
    height: 0;
    //background-color: #FFEFC6;
    background-color: white;
    color: black;
    opacity: .95;
    transition: height 0.3s ease;
    border: 1px solid black;

    ${Container}:hover & {
        height: auto;
        height: 100%;
        overflow: visible;
    }
    transition: width 0.3s ease, height 0.3s ease overflow 0.3s normal;
`

const ContentCardData = styled.div`
    width: 100%;
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    line-height: 25px;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const ContentCardLogo = styled.img`
    height: 100px;
    width: 100px;
    margin-right: 10px;
    border: 1px solid black;
`

const ContentCardTitle = styled.div`
    display: flex;
    flex-direction: column;
`

interface JobRoleBlockProps {
    companyLogoURL: string;
    companyName: string;
    title: string;
    location: string;
    workDescription: ReactNode;
    companyURL: string;
    linkedinURL: string;
    backgroundColor?: string;
    backgroundImage?: string;
}

function JobRoleBlock(props: JobRoleBlockProps) {

    return (
        <Container>
            <JobBackground $background={props.backgroundColor} $backgroundimage={props.backgroundImage}>
                <LogoImage src={props.companyLogoURL} />
                <JobContentCard>
                    <ContentCardData>
                        <TitleWrapper>
                            <ExternalLink url={props.companyURL}><ContentCardLogo src={props.companyLogoURL} /></ExternalLink>
                            <ContentCardTitle>
                                <ExternalLink url={props.companyURL}><h1>{props.companyName}</h1></ExternalLink>
                                <h2>Title: {props.title}</h2>
                            </ContentCardTitle>
                        </TitleWrapper>
                        <h3>Location: {props.location}</h3>
                        <div>Responsibilities: {props.workDescription}</div>
                    </ContentCardData>
                </JobContentCard>
            </JobBackground>
        </Container>
    )
}

export default JobRoleBlock;