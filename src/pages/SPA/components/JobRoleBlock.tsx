import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import { HashLink } from 'react-router-hash-link';
import { useOnClickOutside } from 'usehooks-ts';
import JobRoleDetailBlock from './JobRoleDetailBlock';

type ContainerProps = {
    $maxchildheight: number;
}
const JobRoleContainer = styled.div<ContainerProps>`
    width: 90%;
    min-width: 350px;
    min-height: 250px;
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
    min-height: ${(props) => (props.$maxchildheight ? `${props.$maxchildheight}px` : '250px')};
`;

type JobBackgroundProps = {
    $background?: string;
    $backgroundimage?: string;
    $isactive: boolean;
}
const JobBackground = styled.div<JobBackgroundProps>`
    position: relative;
    min-height: 250px;
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
    ${JobRoleContainer}:hover & {
        width: 105%;
    }
`;

const AnchorLink = styled(HashLink)`
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const LogoImage = styled.img`
    min-width: 150px;
    min-height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export type JobRoleBlockProps = {
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

function JobRoleBlock (props: JobRoleBlockProps) {

  const [isActive, setIsActive] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const childRef = useRef<HTMLDivElement>(null);
  const insideOutsideRefElement = useRef(null);

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

  const handleClickOutside = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 200);
  };

  /*const handleClickInside = () => {
      // Your custom logic here
      console.log('clicked inside')
    }*/

  useOnClickOutside(insideOutsideRefElement, handleClickOutside);

  useEffect(() => {
    if (childRef.current) {
      const height =
                childRef.current.clientHeight;
      setChildHeight(height);
    }
  }, [isActive]);

  return (
    <JobRoleContainer id={props.companyId}
      ref={insideOutsideRefElement}
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
        <JobRoleDetailBlock
          isVisible={isActive}
          height={childHeight}
          childRef={childRef}
          jobRoleDetails={props} />
      </JobBackground>
    </JobRoleContainer>
  );
}

export default JobRoleBlock;