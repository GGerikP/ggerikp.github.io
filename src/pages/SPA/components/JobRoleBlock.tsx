import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import theme from '../../../theme';
import Link from '../../../components/Link';
import { HashLink } from 'react-router-hash-link';
import { useOnClickOutside } from 'usehooks-ts'

interface ContainerProps {
    $maxchildheight: number;
}
const Container = styled.div<ContainerProps>`
    width: 90%;
    min-width: 350px;
    min-height: 350px;
    overflow: visible;
    margin-top: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    @media (max-width > ${theme.breakpoints.tablet}) {
        width: 50%;
    }

    transition: min-height .5s ease;
    min-height: ${(props) => (props.$maxchildheight ? `${props.$maxchildheight}px` : '350px')};
`

interface JobBackgroundProps {
    $background?: string;
    $backgroundimage?: string;
    $isactive: boolean;
}
const JobBackground = styled.div<JobBackgroundProps>`
    position: relative;
    min-height: 350px;
    height: 100%;
    width: ${(props) => (props.$isactive ? '105%' : '100%')};
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
    transition: width 0.5s ease;
    ${Container}:hover & {
        width: 105%;
    }
`

const AnchorLink = styled(HashLink)`
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

const LogoImage = styled.img`
    min-width: 250px;
    min-height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

interface JobContentCardProps {
    $isvisible: boolean;
    height: number;
}
const JobContentCard = styled.div<JobContentCardProps>`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    background-color: white;
    color: black;
    opacity: ${(props) => (props.$isvisible ? '1' : '0')};
    transition: all .5s ease;
    height: ${(props) => (props.$isvisible ? 'auto' : '0')};
    padding: 20px;
`

const ContentCardData = styled.div`
    width: 100%;
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
    companyId: string;
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

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hash: string) => {
        event.preventDefault();
        setIsActive(true);
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
                const yOffset = -80;
                window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
            }
        }, 600);
    };

    const [isActive, setIsActive] = useState(false);
    const [childHeight, setChildHeight] = useState(0);
    const childRef = useRef<HTMLDivElement>(null);

    const ref = useRef(null)

    const handleClickOutside = () => {
        setTimeout(() => {
            setIsActive(false);
        }, 200);
    }
  
    /*const handleClickInside = () => {
      // Your custom logic here
      console.log('clicked inside')
    }*/
  
    useOnClickOutside(ref, handleClickOutside)

    useEffect(() => {
        if (childRef.current) {
            const computedStyle = getComputedStyle(childRef.current);
            const height =
              childRef.current.clientHeight;
            setChildHeight(height);
        }
    }, [isActive]);

    return (
        <Container id={props.companyId}
            ref={ref}
            $maxchildheight={isActive ? childHeight + 2 : 0}
            >
            <JobBackground id="background" 
                $isactive={isActive} 
                $background={props.backgroundColor} 
                $backgroundimage={props.backgroundImage}>
                <AnchorLink to={`#${props.companyId}`} 
                onClick={(event) => handleClick(event, `#${props.companyId}`)}>
                    <LogoImage src={props.companyLogoURL} />
                </AnchorLink>
                <JobContentCard id="JobContentCard" $isvisible={isActive} height={childHeight} ref={childRef}>
                    <ContentCardData>
                        <TitleWrapper>
                            <Link url={props.companyURL}><ContentCardLogo src={props.companyLogoURL} /></Link>
                            <ContentCardTitle>
                                <Link url={props.companyURL}><h1>{props.companyName}</h1></Link>
                                <h2>{props.title}</h2>
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