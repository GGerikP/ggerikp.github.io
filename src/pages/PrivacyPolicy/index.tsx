import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyPageWrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  autofocus;
`;

const PrivacyPolicyContentBox = styled.div`
  margin: 100px 20px 20px 20px;
  max-width: 800px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: white;
  border: solid 1px black;
  padding: 20px;
`;

const PrivacyPolicyPage: React.FC = () => {
  return (
    <PrivacyPolicyPageWrapperDiv id="privacy-policy">
      <PrivacyPolicyContentBox>
        <div>
          <h1>Privacy Policy for gerikpeterson.com</h1>
          <p>Last updated: April 2024</p>
          <h2>Information that is gathered from visitors</h2>
          <p>In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.</p>
          <p>Cookies may be used to remember visitor preferences when interacting with the website.</p>
          <p>Questions asked of the AI Assistant may be stored up to 30 days.</p>
          <h2>How Information is used</h2>
          <p>The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising.</p>
          <p>AI assistant conversations will only be used for auditing and debugging purposes.</p>
          <h2>Visitor Options</h2>
          <p>You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.</p>
          <h2>Cookies</h2>
          <p>Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website.</p>
          <p>3rd party advertising companies may also use cookies for tracking purposes.</p>
          <h2>Google Ads</h2>
          <p>There are currently no ads on the website, but Google, as a third party vendor, uses cookies to serve ads.</p>
          <p>Google's use of the DART cookie enables it to serve ads to visitors based on their visit to sites they visit on the Internet.</p>
          <p>Website visitors may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>
        </div>
      </PrivacyPolicyContentBox>
    </PrivacyPolicyPageWrapperDiv>
  );
};

export default PrivacyPolicyPage;