import React from 'react';
import Logo from '../../images/logo-contact.png';
import LogoDaniel from '../../images/logo-daniel.png';
import backgroundAbout from '../../images/bg-about.jpeg';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


import {
  ContactContainer,
  ContactH1,
  ContactWrapper,
  ContactIcon,
  SocialIcons,
  SocialIconLink
} from './ContactElements';

const Contact = () => {

  return (
    <div id="contact">
      <ContactContainer backgroundImageCustom={backgroundAbout}>
        <ContactWrapper>
          <ContactIcon src={Logo} />
          <ContactIcon src={LogoDaniel} />
        </ContactWrapper>
        <ContactH1>Siga-nos em nossas redes sociais.</ContactH1>

        <SocialIcons>
          <SocialIconLink href="/" target="_blank" arial-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" arial-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
        </SocialIcons>

        <ContactH1>Contatos:</ContactH1>

        <SocialIcons>
          <SocialIconLink href="/" target="_blank" arial-label="Whatsapp">
            <FaWhatsapp />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" arial-label="Email">
            <MdEmail />
          </SocialIconLink>
        </SocialIcons>
      </ContactContainer>
    </div>
  )
}

export default Contact
