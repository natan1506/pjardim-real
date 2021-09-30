import React from 'react';
import { Button } from '../ButtonElement';

import backgroundAbout from '../../images/bg-about.jpeg';

import { 
  InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  BtnWrap, 
  ImgWrap, 
  Img
} from './InfoElements';

const InfoSection = ({ 
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  lightText, 
  headline, 
  darkText, 
  description, 
  buttonLabel, 
  img, 
  alt, 
  primary, 
  dark, 
  dark2,
}) => {

  return (
    <>
      <InfoContainer id={id} backgroundImageCustom={id === 'about' ? backgroundAbout : false}
      >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to='quotation' 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>                
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
