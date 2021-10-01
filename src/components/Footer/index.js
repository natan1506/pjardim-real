import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Logo from  '../../images/logo-escrita-white.png';
import { 
  FooterContainer, 
  FooterWrapper, 
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  ImgLogo
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
              <ImgLogo src={Logo} alt="Logo jardim real" />
            </SocialLogo>
            <WebsiteRights>Natan Souza © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
