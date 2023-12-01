import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sprite from '../../assets/sprite.svg';
import first from '../../assets/images/project-1.jpg';
import second from '../../assets/images/project-2.jpg';
import third from '../../assets/images/project-3.jpg';
import fourth from '../../assets/images/project-4.jpg';
import fifth from '../../assets/images/project-5.jpg';
import { Title } from '../Cases/Cases.styled';
import {
  StyledSliderContainer,
  StyledCustomDots,
  ControlsWrapperAll,
  ControlsWrapper,
  BtnArrowNext,
  BtnArrowPrev,
  Slide,
  NameWrapper,
  TypeWrapper,
  DescrWrapper,
} from './Slider.styled';

const MySlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const [slide, setSlide] = useState(window.innerWidth >= 1440 ? 2 : 1);

  useEffect(() => {
    const handleViewportChange = () => {
      if (window.innerWidth >= 767) {
        setSlide(2);
        return;
      }

      if (window.innerWidth < 768) {
        setSlide(1);
        return;
      }
    };

    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: slide,
    afterChange: current => setCurrentSlide(current),
  };

  return (
    <>
      <ControlsWrapperAll>
        <Title>Successful cases of our company</Title>
        <ControlsWrapper>
          <BtnArrowPrev onClick={sliderRef?.slickPrev}>
            <svg width={36} height={36}>
              <use href={sprite + '#icon-arrow-left'}></use>
            </svg>
          </BtnArrowPrev>
          <BtnArrowNext onClick={sliderRef?.slickNext}>
            <svg width={36} height={36}>
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </BtnArrowNext>
        </ControlsWrapper>
        <StyledCustomDots>
          <span>{`${currentSlide + 1}`.padStart(2, '0')}</span>/{`${totalSlides}`.padStart(2, '0')}
        </StyledCustomDots>
      </ControlsWrapperAll>
      <StyledSliderContainer>
        <Slider ref={setSliderRef} {...settings}>
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
              <TypeWrapper>
                <p>Mini nuclear stations</p>
                <p>May 2021</p>
              </TypeWrapper>
            </DescrWrapper>
          </Slide>
        </Slider>
      </StyledSliderContainer>
    </>
  );
};

export default MySlider;
