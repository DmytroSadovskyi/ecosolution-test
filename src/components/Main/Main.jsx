import React from 'react';
import Container from '../Container';
import {
  Divider,
  LearnMoreLink,
  MainSection,
  MainText,
  MainTitle,
  ContactInfo,
  ImageWrapper,
} from './Main.styled';
import sprite from '../../assets/sprite.svg';

const Main = () => {
  return (
    <MainSection>
      <Container>
        <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
        <MainText>
          Development and implementation of renewable non-polluting energy sources, generating power
          generation using energy wind, sun, water, biomass
        </MainText>
        <LearnMoreLink href="#">
          Learn more
          <span>
            <svg width={16} height={16}>
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </span>
        </LearnMoreLink>
        <Divider />
        <ContactInfo>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
        </ContactInfo>
        <ImageWrapper></ImageWrapper>
      </Container>
    </MainSection>
  );
};

export default Main;
