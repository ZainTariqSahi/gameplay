import React from 'react';
import Slider from 'react-slick';
import './CardSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardslider1 from '../../../assets/images/cardslider1.jfif';
import cardslider2 from '../../../assets/images/cardslider2.jfif';
import cardslider3 from '../../../assets/images/cardslider3.jfif';
import cardslider4 from '../../../assets/images/cardslider4.jfif';
import cardslider5 from '../../../assets/images/cardslider5.jfif';
import cardslider6 from '../../../assets/images/cardslider6.jfif';
import cardslider7 from '../../../assets/images/cardslider7.jfif';
import { Stack } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
import Card from '../card/Card';
const CardSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <MdArrowBackIos color="white" />,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Stack marginTop={'0 !important'} bgColor={'inherit'} className="slider">
      <Slider {...settings}>
        <Card img={cardslider1} />
        <Card img={cardslider2} />
        <Card img={cardslider3} />
        <Card img={cardslider4} />
        <Card img={cardslider5} />
        <Card img={cardslider6} />
        <Card img={cardslider1} />
        <Card img={cardslider7} />
        <Card img={cardslider2} />
        <Card img={cardslider3} />
        <Card img={cardslider7} />
      </Slider>
    </Stack>
  );
};

export default CardSlider;
