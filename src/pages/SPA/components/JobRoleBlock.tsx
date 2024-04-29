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
    &:hover {
      min-height: ${(props) => (props.$maxchildheight ? `${props.$maxchildheight}px` : '300px')};
    }
`;

type JobBackgroundProps = {
    $background?: string;
    $backgroundimage?: string;
    $isactive: boolean;
}
const JobBackground = styled.div<JobBackgroundProps>`
    position: relative;
    min-height: 275px;
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

const JobRoleCover = styled.div`
    position: relative;
    min-width: 100%;
    min-height: 100%;
`;

const AnchorLink = styled(HashLink)`
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const LogoImage = styled.div<{$backgroundImgURL: string, $coverAccentColor: string}>`
    min-width: 200px;
    min-height: 200px;
    background-image: url(${(props) => props.$backgroundImgURL});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    padding: 2px;
    border: 1px solid ${(props) => props.$coverAccentColor};
`;

const JobRoleCoverTitle = styled.div<{$coverAccentColor: string}>`
    height: 35px;
    width: 300px;
    text-align: center;
    color: ${(props) => props.$coverAccentColor};
    text-decoration: underline;
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
    coverAccentColor: string;
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
        $backgroundimage={props.backgroundImage}
      >
        <JobRoleCover>
          <AnchorLink to={`#${props.companyId}`}
            onClick={(event) => handleClick(event, `#${props.companyId}`)}>
            <LogoImage $backgroundImgURL={props.companyLogoURL} $coverAccentColor={props.coverAccentColor}/>
            <JobRoleCoverTitle $coverAccentColor={props.coverAccentColor}>{props.title}</JobRoleCoverTitle>
          </AnchorLink>
        </JobRoleCover>
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