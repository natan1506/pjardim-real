import React, { useRef, useState } from 'react';
import { Button } from '../ButtonElement';
import ImgBgMobile from '../../images/img3.jpeg';

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
      { id: 1, img: require('../../images/img1.jpeg') },
      { id: 2, img: require('../../images/img2.jpeg') },
      { id: 3, img: require('../../images/img3.jpeg') },
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
    <CarouselContainer id="home">
      {size >= 768 ? (
        <CarouselBg
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
          enableAutoPlay
          autoPlaySpeed={4000}
          pagination={false}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout)
            if (index + 1 === totalPages) {
              resetTimeout = setTimeout(() => {
                  carouselRef.current.goTo(0)
              }, 4000) // same time
            }
          }}
        >
          {state.items.map(item => <CarouselItem key={item.id}><img src={item.img.default} alt={item.id} /></CarouselItem>)}
        </CarouselBg>
      )
      :
      (
        <ImgBg src={ImgBgMobile}/>
      )
    }
      <CarouselContent>
        <CarouselH1>Projetos personalizado <br /> em até 24h</CarouselH1>
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
