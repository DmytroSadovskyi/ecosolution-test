import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import sprite from '../../assets/sprite.svg';
import first from '../../assets/images/project-1.jpg';
import second from '../../assets/images/project-2.jpg';
import third from '../../assets/images/project-3.jpg';
import fourth from '../../assets/images/project-4.jpg';
import fifth from '../../assets/images/project-5.jpg';

const StyledSliderContainer = styled.div`
  position: relative;
`;

const StyledCustomDots = styled.div`
  margin-bottom: 19px;
  color: rgba(23, 61, 51, 0.25);
  font-family: 'Fira Sans', sans-serif;
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;

  & span {
    color: #173d33;
  }
`;

const ControlsWrapper = styled.div``;

export const BtnArrowNext = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 100px;
  border: 1px solid #173d33;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    stroke: #173d33;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    bottom: -80px;
  }
  &:hover,
  &:focus {
    border: 1px solid #97d28b;
    svg {
      stroke: #97d28b;
    }
  }
`;

export const BtnArrowPrev = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 100px;
  border: 1px solid #173d33;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    stroke: #173d33;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    bottom: -80px;
  }

  &:hover,
  &:focus {
    border: 1px solid #97d28b;
    svg {
      stroke: #97d28b;
    }
  }
`;

const MySlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setCurrentSlide(current),
  };

  return (
    <StyledSliderContainer>
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
      <Slider ref={setSliderRef} {...settings}>
        <div>
          <img src={first} alt="" />
          <div>
            <p>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</p>
            <a href=""></a>
            <p>Wind Power for auto field irrigation</p>
            <p>July 2023</p>
          </div>
        </div>
        <div>
          <img src={second} alt="" />
          <div>
            <p>Zhytomyr city Private Enterprise “Bosch”</p>
            <a href=""></a>
            <p>Solar Panels for industrial use</p>
            <p>November 2023</p>
          </div>
        </div>
        <div>
          <img src={third} alt="" />
          <div>
            <p>Rivne city Private Enterprise “Biotech”</p>
            <a href=""></a>
            <p>Thermal modules</p>
            <p>October 2023</p>
          </div>
        </div>
        <div>
          <img src={fourth} alt="" />
          <div>
            <p>Kherson city Private Enterprise “HealthyFarm”</p>
            <a href=""></a>
            <p>Wind power</p>
            <p>September 2021</p>
          </div>
        </div>
        <div>
          <img src={fifth} alt="" />
          <div>
            <p>Zaporizhia city Private Enterprise “Biotech”</p>
            <a href=""></a>
            <p>Mini nuclear stations</p>
            <p>May 2021</p>
          </div>
        </div>
      </Slider>
    </StyledSliderContainer>
  );
};

export default MySlider;
