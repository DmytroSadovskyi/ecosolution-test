import React from 'react';
import Container from '../Container';
import {
  Divider,
  LearnMore,
  MainSection,
  MainText,
  MainTitle,
  Description,
  ContactInfo,
  Copyright,
  Image,
} from './Main.styled';
import sprite from '../../assets/sprite.svg';
import image from '../../assets/images/mainBg/wind-turbine-clean-energy-mobile@3x.jpg';

const Main = () => {
  return (
    <MainSection id="main">
      <Container>
        <Description>
          <MainTitle>RENEWABLE ENERGY For any task</MainTitle>

          <MainText>
            Development and implementation of renewable non-polluting energy sources, generating
            power generation using energy wind, sun, water, biomass
          </MainText>
          <LearnMore to="cases" smooth={true}>
            Learn more
            <span>
              <svg width={16} height={16}>
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </span>
          </LearnMore>
        </Description>
        <Divider />
        <ContactInfo>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
          <Copyright>ecosolution © 2023</Copyright>
        </ContactInfo>

        <Image src={image} alt="wind-turbine" />
      </Container>
    </MainSection>
  );
};

export default Main;
