import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import JobRoleBlock from './components/JobRoleBlock';
import LogoRad from './images/logo-radicallydigital.jpeg';
import LogoDFP from './images/logo-digitalfineprint.jpeg';
import LogoFutureCoders from './images/logo-futurecoders.jpeg';
import LogoOpenBet from './images/logo-openbet.jpeg';
import LogoPresidentialBrokerage from './images/logo-presidentialbrokerage.jpeg';
import LogoJoannStores from './images/logo-joannstores.jpeg';
import LogoAmericanGreetings from './images/logo-americangreetings.jpeg';

const ExperienceBlockSection = styled.section`
    width: 100%;
    min-width: 350px;
    z-index: 1;
    @media (width > ${theme.breakpoints.mobile}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    padding-bottom: 10px;
`;


const ExperienceBlockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4vw;
    background-color: ${theme.colors.primaryAccent};
    color: black;
    font-family: ${theme.fonts.secondary};
    border-radius: 5px;
    padding-bottom: 20px;
    z-index: 1;
`;

const ExperienceContent = styled.div`
    width: 100%;
    @media (width > ${theme.breakpoints.tablet}) {
        width: 75%;
    }
`;

const ExperienceIntroContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    width: 100%;
    min-width: 350px;
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
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
`;

const ExperienceBlurb = styled.div`
    flex-grow: 1;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Roles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

function ExperienceBlock () {

  return (
    <ExperienceBlockSection id="cv">
      <ExperienceBlockContainer>
        <ExperienceContent>
          <ExperienceIntroContainer>
            <Title>Professional Experience</Title>
            <ExperienceBlurb>
              <p>Click on the roles below to find out more.</p>
            </ExperienceBlurb>
          </ExperienceIntroContainer>
          <Roles>
            <JobRoleBlock
              companyId="rad"
              companyLogoURL={LogoRad}
              companyName="Radically Digital"
              title="Head of Engineering"
              location="London, England"
              workDescription={
                <div>
                  <p>As the Head of Engineering for Radically Digital I was responsible for:</p>
                  <ol style={{ listStyleType: 'disc' }}>
                    <li>Working with the CEO and management team in developing a technical strategy for the business.</li>
                    <li>Leading teams of engineers in the discovery, design, and development of software solutions with a focus in cloud computing</li>
                    <li>Providing managerial and leadership coaching to the rest of the management team</li>
                    <li>Working as a Consultant Engineer for clients in all facets of software development</li>
                    <li>Holding talks on managing mental health</li>
                    <li>Designing and running an associate program to build a learning platform for new engineers</li>
                    <li>Providing architectural suggestions for new projects</li>
                  </ol>
                  <p>Software Stack</p>
                  <ol style={{ listStyleType: 'disc' }}>
                    <li>Some of the recent projects have included:</li>
                    <li>GCP Cloud Compute, BigQuery, Cloud Functions, Kafka, AWS, EC2, ECR, CircleCI, GitHub Pipelines</li>
                    <li>TypeScript, Scala, Django, Flask, Strapi, React, GraphQL, CircleCI, DataDog, Docker, Kubernetes</li>
                  </ol>
                </div>
              }
              companyURL='https://radically.digital/'
              linkedinURL='https://www.linkedin.com/company/radically-digital/mycompany/verification/'
              backgroundColor="#000000"
            />
            <JobRoleBlock
              companyId="dfp"
              companyLogoURL={LogoDFP}
              companyName="Digital Fineprint"
              title="Senior Software Engineer"
              location=" London, England"
              workDescription={<div>
                <p>I worked as a full time Senior Software Engineer providing full stack technical solutions using Python & AWS cloud computing data focused InsurTech firm. In this role I was responsible for:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Designing, developing, testing, deploying, and maintaining software solutions using:
                    <ol style={{ listStyleType: 'disc' }}>
                      <li>AWS Server & Serverless Techs: ECS, EC2, Spot Fleets, Lambda, Batch, Step Functions, API Gateways</li>
                      <li>Python Server Code: Flask, MagicMock, Alembic, Psycopg2, SQLAlchemy</li>
                      <li>RDS & DMS: Pentaho, PostGres, Athena, Glue, ElasticSearch</li>
                      <li>Queuing services: Redis, SQS</li>
                      <li>Deployment methods and tools: CD/CI, Docker, BitBucket Pipelines, Terraform, AWS CLI</li>
                    </ol>
                  </li>
                  <li>Contributing to team management and training including: training other developers and PMs, and building development process via an agile approach</li>
                  <li>Working with upper management in producing estimates, documentation, and project planning</li>
                </ol>
              </div>}
              companyURL='https://www.linkedin.com/company/digital-fineprint/?originalSubdomain=uk'
              linkedinURL='https://www.linkedin.com/company/digital-fineprint/'
              backgroundColor="#FFFFFF"
              backgroundImage="linear-gradient(to top right, #B10EC1 10%, #601BBC)"
            />
            <JobRoleBlock
              companyId="futurecoders"
              companyLogoURL={LogoFutureCoders}
              companyName="futureCoders"
              title="Development Lead"
              location="Chatham, UK"
              workDescription={<div>
                <p>This is small not-for-profit software development firm focused on developing web software solutions while also providing technical training for A-Level students</p>
                <p>In this role I acted as the technical authority for the business in order to design and deliver of full stack web applications for 3rd party clients</p>
                <p>I provided technical and managerial training for both the management team and the students in:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Database design (Postgresql)</li>
                  <li>Server side applications (Python)</li>
                  <li>API development (Django)</li>
                  <li>Client side development (React)</li>
                  <li>Code repository usage (Git)</li>
                </ol>
              </div>}
              companyURL='https://www.futurecoders.org.uk/'
              linkedinURL='https://www.linkedin.com/company/futurecoders/'
              backgroundColor="#FFFFFF"
            />
            <JobRoleBlock
              companyId="openbet"
              companyLogoURL={LogoOpenBet}
              companyName="OpenBet"
              title="Technical Lead"
              location="London, England"
              workDescription={<div>
                <p>Managerial Work: Team & Project management including:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Agile Scrum Master for an international development team spanning 3 countries</li>
                  <li>Directing and supporting a 1 ½ year project (team of 7)</li>
                  <li>Team Line manager responsible for handling appraisals, promotions, and personal support for a team of up to 8 developers</li>
                  <li>Trained a new development team in Greece over the course of 4 months</li>
                  <li>Facilitating telephone and face-to-face interviews</li>
                  <li>Training inductees on system architecture (software and hardware)</li>
                  <li>Ensuring quality control by reviewing code and establishing coding standards</li>
                  <li>Managing resources and client delivery expectations and estimate revisions</li>
                </ol>
                <p>Client Consulting: Direct external customer contact including:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>First point of contact for clients in both adverse and business-as-usual circumstances</li>
                  <li>Responsible for working with the product owner in grooming the backlog and understanding Reqs when on an Agile team</li>
                  <li>Interfacing and liaising with the internal and external teams to facilitate the needs of my team/project (including removing impediments on an Agile team)</li>
                  <li>Developing estimates and submitted project proposals to customers</li>
                  <li>On-site client discussions and performance monitoring (during peak periods)</li>
                  <li>Supplying technical input and guidance in building and designing projects</li>
                </ol>
                <p>Technical: Software development and server maintenance including:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Server side application development in Tcl</li>
                  <li>Database schema development and query performance review via Informix DB + SQL</li>
                  <li>Front end web development (standard HTML, CSS, JavaScript + AJAX/JQuery, etc)</li>
                  <li>Backend server work including configuring Apache settings, monitoring the server performance (Linux), and working with a 3rd party supplier with hardware faults</li>
                  <li>Facilitating releases to Production including all aspects of the development, including (but not limited to): application code & static content deployment + schema changes</li>
                </ol>
              </div>}
              companyURL='https://www.openbet.com/'
              linkedinURL='https://www.linkedin.com/company/weareopenbet/'
              backgroundColor="#000038"
            />
            <JobRoleBlock
              companyId="americangreetings"
              companyLogoURL={LogoAmericanGreetings}
              companyName="American Greetings"
              title="Data Analyst"
              location="Cleveland, Ohio (USA)"
              workDescription={<div>
                <p>In this role I was responsible for:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Developed tools in VBA to improve reporting efficiency and accuracy.</li>
                  <li>Developed additional database batch systems using SQL, Access, Excel, VBA, and SAS.</li>
                  <li>Routinely provide technical support and training to team members for the purpose of improving overall team performance and production.</li>
                </ol>
                <p>Greatest Achievement: I developed a semi-application in Excel which allowed users to run a collection of reports which were previously manually produced. This interface optimized the runtime of many of these reports down to a “Single Click” saving an average of 10-15 hours of weekly work by utilizing VBA and MS Access Macros.</p>
              </div>}
              companyURL='https://www.americangreetings.com/'
              linkedinURL='https://www.linkedin.com/company/american-greetings/'
              backgroundColor="#FFFFFF"
            />
            <JobRoleBlock
              companyId="joann"
              companyLogoURL={LogoJoannStores}
              companyName="Joann Stores"
              title="eMarketing Specialist"
              location="Hudson, Ohio (USA)"
              workDescription={<div>
                <p>In this role I was responsible for:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Facilitating the testing process of HTML marketing e-mails, including but not limited to:
                    <ol style={{ listStyleType: 'disc' }}>
                      <li>Black box testing of all e-mail functionality such as links, animated images, and “Refer a Friend” forwarding capability</li>
                      <li>Using a requirements/design document; verify all e-mail verbiage and content.</li>
                    </ol>
                  </li>
                </ol>
                <p>Greatest Achievement: I developed, executed, and documented a testing plan for the sales flyers posted on Jo-Ann.com.</p>
              </div>}
              companyURL='https://www.joann.com/'
              linkedinURL='https://www.linkedin.com/company/jo-ann-stores-inc-/'
              backgroundColor="#72BD00"
            />
            <JobRoleBlock
              companyId="presidentialbrokerage"
              companyLogoURL={LogoPresidentialBrokerage}
              companyName="Presidential Brokerage"
              title="Broker's Assistant"
              location="San Diego, California (USA)"
              workDescription={<div>
                <p>In this role I was responsible for:</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Developing macros in order to automate data processing efficiency </li>
                  <li>Maintaining client database and stock portfolios within StockCharts.com and ACT!</li>
                  <li>Creating professional reporting Excel spread sheets for data analysis</li>
                </ol>
                <p>Greatest Achievement: Through my initiative I began incorporating VBA into the generation of some of the standard reports saving hours of daily work.</p>
              </div>}
              companyURL='https://www.linkedin.com/company/presidential-brokerage/'
              linkedinURL='https://www.linkedin.com/company/presidential-brokerage/'
              backgroundColor="#00073E"
            />
          </Roles>
        </ExperienceContent>
      </ExperienceBlockContainer>
    </ExperienceBlockSection>
  );
}

export default ExperienceBlock;