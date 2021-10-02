import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';


export const CarouselContainer = styled.div`
  /* background: #0c0c0c; */
  background: url(${props => props.backgroundImageCustom});

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 auto;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1008PX){
    height: 529px;
  }
  @media screen and (max-width: 770px){
    height: 400px;
  }
`;

export const CarouselBg = styled(Carousel)`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    top: 80px;
  }

  .rec-carousel-item:focus {
    height: 100%;
  }


  .rec-carousel {
    position: relative;
    width: 100%;
    height: 100%;

    .rec.rec-arrow {
      position: absolute;
      background: #fff;

      &:hover, &:focus{
        background: #01bf71;
      }
    }

    .rec-arrow-left{
      z-index: 999;
      left: 5px;
    }

    .rec-arrow-right{
      right: 5px;
    }

    .rec-pagination{
      position: absolute;
    }
  }

  .rec-slider-container{
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
  }


  .rec-dot_active {
    background-color: #01bf71 ;
    box-shadow: 0 0 1px 3px rgb(20 182 107);
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 480px){
    height: 100%;
    width: auto;
    overflow: hidden;
  }
`;


export const CarouselItem = styled.img`
  min-width: 100%;
  height: 800px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    overflow: hidden;
  }

`;


export const CarouselContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media screen and (max-width: 1008PX) {
    top: 160px;
    padding: 4px 10px;
  }

  @media screen and (max-width: 768px) {
    padding: 4px 10px;
  }
`;

export const CarouselH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-shadow: 5px 5px 10px  #000;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    padding: 4px 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CarouselP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CarouselBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
