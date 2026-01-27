import React from 'react';
import styled from "styled-components";
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

// Example Bio object with social links
const Bio = {
  facebook: "https://facebook.com/yourprofile",
  twitter: "https://twitter.com/yourprofile",
  linkedin: "https://linkedin.com/in/yourprofile",
  instagram: "https://instagram.com/yourprofile",
  github: "https://github.com/yourprofile"
};

const FooterContainer = styled.div`
   width: 100%;
   padding: 2rem 0;
   display: flex;
   justify-content: center; /* corrected spelling */
   z-index: 10;
`;

const FooterWrapper = styled.div`
   width: 100%;
   max-width: 1200px;
   display: flex;
   flex-direction: column;
   gap: 14px;
   align-items: center;
   padding: 1rem;
   color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
`;

const Nav = styled.ul`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center; /* corrected spelling */
    @media (max-width: 768px){
       flex-wrap: wrap;
       gap: 1rem;
       justify-content: center;
       text-align: center;
       font-size: 12px;
    }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
   display: flex;
   margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover{
      color: ${({ theme }) => theme.primary};
    }
`;

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <Logo>Komal Pandey</Logo>
            <Nav>
                <NavLink href="#About">About</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Experience">Experience</NavLink>
                <NavLink href="#Projects">Projects</NavLink>
                <NavLink href="#Education">Education</NavLink>
            </Nav>
            <SocialMediaIcons>
                <SocialMediaIcon href={Bio.facebook} target="_blank">
                    <FacebookRounded />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.twitter} target="_blank">
                    <TwitterIcon />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="_blank">
                    <LinkedInIcon />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.instagram} target="_blank">
                    <InstagramIcon />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.github} target="_blank">
                    <GitHubIcon />
                </SocialMediaIcon>
            </SocialMediaIcons>
        </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
