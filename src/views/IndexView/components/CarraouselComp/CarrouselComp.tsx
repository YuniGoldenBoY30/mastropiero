// ComponenteCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';

const CarraouselComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de elementos visibles a la vez
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/slider/1.jpeg" alt="Slide 1" />
      </div>
      <div>
        <img src="/slider/2.jpeg" alt="Slide 2" />
      </div>
      <div>
        <img src="/slider/3.jpeg" alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default CarraouselComp;
