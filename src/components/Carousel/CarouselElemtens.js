import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';


export const CarouselContainer = styled.div`
  /* background: #0c0c0c; */

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
    height: 300px;
  }
`;


export const CarouselBg = styled(Carousel)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;


  @media screen and (max-width: 768px) {
    top: 80px;
  }

  .rec-carousel {
    position: relative;
    width: 100%;
    height: 100%;

    .rec.rec-arrow {
      position: absolute;

      &:hover, &:focus{
        background: #01bf71;
      }
    }

    .rec-arrow-left{
      z-index: 999;
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

  
  .rec-carousel-item:focus {
    height: 100%;
  }
`;


export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
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
    top: 80px;
    padding: 4px 10px;
  }
`;

export const CarouselH1 = styled.h1`
  color: #fff;font-size: 48px;
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
