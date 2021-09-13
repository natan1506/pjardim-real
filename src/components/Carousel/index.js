import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../ButtonElement';

import {
  CarouselContainer,
  CarouselBg,
  CarouselItem,
  CarouselContent,
  CarouselH1,
  CarouselP,
  CarouselBtnWrapper
} from './CarouselElemtens';

function Carousel() {
  const carouselRef = useRef(null);
  const [hover, setHover] = useState(false);


  const onHover = () => {
    setHover(!hover);
  }

  const state = {
    items: [
      { id: 1, img: require('../../images/img1.jpeg') },
      { id: 2, img: require('../../images/img2.jpeg') },
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


  return (

    <CarouselContainer id="home">
      <CarouselBg
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
        enableAutoPlay
        autoPlaySpeed={4000}
        pagination={false}

      >
        {state.items.map(item => <CarouselItem key={item.id}><img src={item.img.default} alt={item.id} /></CarouselItem>)}
      </CarouselBg>
      <CarouselContent>
        <CarouselH1>Virtual Banking Made Easy</CarouselH1>
        <CarouselP>
          Sign uo for a new account today and receive $250 in credit towards your next payment.
        </CarouselP>
        <CarouselBtnWrapper>
          <Button
            to="signup"
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
            Get started
          </Button>
        </CarouselBtnWrapper>
      </CarouselContent>
    </CarouselContainer>
  )
}

export default Carousel;
