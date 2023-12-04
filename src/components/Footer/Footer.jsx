import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';

import {
  Section,
  FooterLogoWrapper,
  FooterSocials,
  LinkToMain,
  InnerContainer,
  FirstWrapper,
  SecondWrapper,
  FooterInfo,
} from './Footer.styled';

const Footer = () => {
  return (
    <Section>
      <Container>
        <InnerContainer>
          <FirstWrapper>
            <FooterLogoWrapper>
              <svg width={31} height={18}>
                <use href={sprite + '#icon-bgAsset'}></use>
              </svg>
              <span>ecosolution</span>
              <svg width={60} height={18}>
                <use href={sprite + '#icon-GREENERGY-FOR-LIFE'}></use>
              </svg>
            </FooterLogoWrapper>
            <LinkToMain to="main" smooth={true} className="mobile">
              <span>
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-up'}></use>
                </svg>
              </span>
            </LinkToMain>
          </FirstWrapper>
          <SecondWrapper>
            <FooterSocials>
              <li>
                <a href="">
                  <svg width={24} height={24}>
                    <use href={sprite + '#icon-facebook'}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width={24} height={24}>
                    <use href={sprite + '#icon-instagram'}></use>
                  </svg>
                </a>
              </li>
            </FooterSocials>
            <LinkToMain to="main" smooth={true} className="tablet">
              <span>
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-up'}></use>
                </svg>
              </span>
            </LinkToMain>
          </SecondWrapper>
        </InnerContainer>
        <InnerContainer>
          <FirstWrapper>
            <FooterInfo>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</FooterInfo>
          </FirstWrapper>
          <SecondWrapper>
            <FooterInfo>office@ecosolution.com</FooterInfo>
            <FooterInfo>ecosolution © 2023</FooterInfo>
          </SecondWrapper>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Footer;
