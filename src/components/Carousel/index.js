import React, { useRef, useState } from 'react';
import { Button } from '../ButtonElement';
import ImgBgMobile from '../../images/00003.png';
import backgroundAbout from '../../images/bg-about.jpeg';

import {
  CarouselContainer,
  CarouselBg,
  ImgBg,
  CarouselItem,
  CarouselContent,
  CarouselH1,
  CarouselBtnWrapper
} from './CarouselElemtens';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width
}



function Carousel() {
  const carouselRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [size, setSize] = useState(getWindowDimensions());

  const updateSize = () => {
    setSize(window.innerWidth)
  }
  
  window.addEventListener('resize', (e)=> {updateSize()});

  const onHover = () => {
    setHover(!hover);
  }

  const state = {
    items: [
      { id: 1, img: require('../../images/00001.png') },
      { id: 2, img: require('../../images/00002.png') },
      { id: 3, img: require('../../images/00003.png') },
      { id: 4, img: require('../../images/00004.png') },
      { id: 5, img: require('../../images/00005.png') },
    ]
  }

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(state.items.length);

    }
  };

  const totalPages = Math.ceil(state.items.length)
  let resetTimeout;

  return (
    <CarouselContainer id="home" backgroundImageCustom={backgroundAbout}>
      {size >= 768 ? (
        <CarouselBg
          itemsToShow={1}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
          enableAutoPlay
          autoPlaySpeed={4000}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout)
            if (index + 1 === totalPages) {
              resetTimeout = setTimeout(() => {
                  carouselRef.current.goTo(0)
              }, 4000) // same time
            }
          }}
        >
          {state.items.map(item => <CarouselItem key={item.id} maxHeight="100%" src={item.img.default} alt={item.id} />)}
        </CarouselBg>
      )
      :
      (
        <ImgBg src={ImgBgMobile}/>
      )
    }
      <CarouselContent>
        <CarouselH1>Projetos personalizados <br /> em até 24h</CarouselH1>
        <CarouselBtnWrapper>
          <Button
            to="quotation"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            PEÇA AGORA
          </Button>
        </CarouselBtnWrapper>
      </CarouselContent>
    </CarouselContainer>
  )
}

export default Carousel;
