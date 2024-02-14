import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import IconSmallLinkedIn from './images/icon-linkedin-small.svg';
import IconSmallGithub from './images/icon-github-small.svg';
import IconSmallStackOverflow from './images/icon-stackoverflow-small.png';
import IconSmallFacebook from './images/icon-facebook-small.svg';

const Container = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: solid 1px black;
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const SocialMediaWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

const SocialMediaIcon = styled.img`
    height: 40px;
    width: 40px;
`

function Footer() {
    return (
        <Container>
            <SocialMediaWrapper><Link url="https://www.linkedin.com/in/gerikpeterson/"><SocialMediaIcon src={IconSmallLinkedIn} /></Link></SocialMediaWrapper>
            <SocialMediaWrapper><Link url="https://github.com/GGerikP"><SocialMediaIcon src={IconSmallGithub} /></Link></SocialMediaWrapper>
            <SocialMediaWrapper><Link url="https://stackoverflow.com/users/3187487/gerik"><SocialMediaIcon src={IconSmallStackOverflow} style={{ border: "2px solid black", borderRadius: "3px", height: "100%"}}/></Link></SocialMediaWrapper>
            <SocialMediaWrapper><Link url="https://www.facebook.com/ggerikp/"><SocialMediaIcon src={IconSmallFacebook} /></Link></SocialMediaWrapper>
        </Container>
    )
}

export default Footer;