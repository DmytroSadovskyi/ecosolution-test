import React, { useState, useEffect, Children, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import sprite from '../../assets/sprite.svg';
import first from '../../assets/images/project-1.jpg';
import second from '../../assets/images/project-2.jpg';
import third from '../../assets/images/project-3.jpg';
import fourth from '../../assets/images/project-4.jpg';
import fifth from '../../assets/images/project-5.jpg';
import { Title } from '../Cases/Cases.styled';
import {
  Pagination,
  Wrapper,
  BtnArrowNext,
  BtnArrowPrev,
  Slide,
  NameWrapper,
  TypeWrapper,
  DescrWrapper,
  ButtonsWrapper,
  ControlsWrapper,
  Divider,
} from './Slider.styled';

const MySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const SliderchildrenCount = Children.count(sliderRef.current.props.children);
      setTotalSlides(SliderchildrenCount);
    }
  }, []);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    afterChange: current => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <>
      <Wrapper>
        <Title>Successful cases of our company</Title>
        <ControlsWrapper>
          <Pagination>
            <span>{`${currentSlide + 1}`.padStart(2, '0')}</span>/
            {`${totalSlides}`.padStart(2, '0')}
          </Pagination>
          <ButtonsWrapper>
            <BtnArrowPrev onClick={prevSlide}>
              <svg width={36} height={36}>
                <use href={sprite + '#icon-arrow-left'}></use>
              </svg>
            </BtnArrowPrev>
            <BtnArrowNext onClick={nextSlide}>
              <svg width={36} height={36}>
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </BtnArrowNext>
          </ButtonsWrapper>
        </ControlsWrapper>
      </Wrapper>

      <Slider ref={sliderRef} {...settings}>
        <Slide>
          <img src={first} alt="project-1" />
          <DescrWrapper>
            <NameWrapper>
              <p>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</p>
              <a href="#">
                <svg width={28} height={28}>
                  <use href={sprite + '#icon-arrow-right-45deg'}></use>
                </svg>
              </a>
            </NameWrapper>
            <Divider />
            <TypeWrapper>
              <p>Wind Power for auto field irrigation</p>
              <p>July 2023</p>
            </TypeWrapper>
          </DescrWrapper>
        </Slide>

        <Slide>
          <img src={second} alt="project-2" />
          <DescrWrapper>
            <NameWrapper>
              <p>Zhytomyr city Private Enterprise “Bosch”</p>
              <a href="#">
                <svg width={28} height={28}>
                  <use href={sprite + '#icon-arrow-right-45deg'}></use>
                </svg>
              </a>
            </NameWrapper>
            <Divider />
            <TypeWrapper>
              <p>Solar Panels for industrial use</p>
              <p>November 2023</p>
            </TypeWrapper>
          </DescrWrapper>
        </Slide>

        <Slide>
          <img src={third} alt="project-3" />
          <DescrWrapper>
            <NameWrapper>
              <p>Rivne city Private Enterprise “Biotech”</p>
              <a href="#">
                <svg width={28} height={28}>
                  <use href={sprite + '#icon-arrow-right-45deg'}></use>
                </svg>
              </a>
            </NameWrapper>
            <Divider />
            <TypeWrapper>
              <p>Thermal modules</p>
              <p>October 2023</p>
            </TypeWrapper>
          </DescrWrapper>
        </Slide>

        <Slide>
          <img src={fourth} alt="project-4" />
          <DescrWrapper>
            <NameWrapper>
              <p>Kherson city Private Enterprise “HealthyFarm”</p>
              <a href="#">
                <svg width={28} height={28}>
                  <use href={sprite + '#icon-arrow-right-45deg'}></use>
                </svg>
              </a>
            </NameWrapper>
            <Divider />
            <TypeWrapper>
              <p>Wind power</p>
              <p>September 2021</p>
            </TypeWrapper>
          </DescrWrapper>
        </Slide>

        <Slide>
          <img src={fifth} alt="project-5" />
          <DescrWrapper>
            <NameWrapper>
              <p>Zaporizhia city Private Enterprise “Biotech”</p>
              <a href="#">
                <svg width={28} height={28}>
                  <use href={sprite + '#icon-arrow-right-45deg'}></use>
                </svg>
              </a>
            </NameWrapper>
            <Divider />
            <TypeWrapper>
              <p>Mini nuclear stations</p>
              <p>May 2021</p>
            </TypeWrapper>
          </DescrWrapper>
        </Slide>
      </Slider>
    </>
  );
};

export default MySlider;
