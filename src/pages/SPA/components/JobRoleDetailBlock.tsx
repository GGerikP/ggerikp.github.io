import React from 'react';
import styled from 'styled-components';
import { JobRoleBlockProps } from './JobRoleBlock';
import Link from '../../../components/Link';

type JobRoleDetailContainerProps = {
    $isvisible: boolean;
    height: number;
}
const JobRoleDetailContainer = styled.div<JobRoleDetailContainerProps>`
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
`;

const ContentCardData = styled.div`
    width: 100%;
    font-size: 15px;
    line-height: 25px;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const ContentCardLogo = styled.img`
    height: 100px;
    width: 100px;
    margin-right: 10px;
    border: 1px solid black;
`;

const ContentCardTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

type JobRoleDetailBlockProps = {
    isVisible: boolean;
    height: number;
    childRef: React.LegacyRef<HTMLDivElement>;
    jobRoleDetails: JobRoleBlockProps;
}

function JobRoleDetailBlock ({ isVisible, height, childRef, jobRoleDetails }: JobRoleDetailBlockProps) {
  return (
    <JobRoleDetailContainer $isvisible={isVisible} height={height} ref={childRef}>
      <ContentCardData>
        <TitleWrapper>
          <Link url={jobRoleDetails.companyURL}><ContentCardLogo src={jobRoleDetails.companyLogoURL} /></Link>
          <ContentCardTitle>
            <Link url={jobRoleDetails.companyURL}><h1>{jobRoleDetails.companyName}</h1></Link>
            <h2>{jobRoleDetails.title}</h2>
          </ContentCardTitle>
        </TitleWrapper>
        <h3>Location: {jobRoleDetails.location}</h3>
        <div>Responsibilities: {jobRoleDetails.workDescription}</div>
      </ContentCardData>
    </JobRoleDetailContainer>

  );
}

export default JobRoleDetailBlock;