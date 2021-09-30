import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
  FooterContainer, 
  FooterWrapper, 
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from './FooterElements';

function Footer() {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              logo
            </SocialLogo>
            <WebsiteRights>Natan Souza © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
