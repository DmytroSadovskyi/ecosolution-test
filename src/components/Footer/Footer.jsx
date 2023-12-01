import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';

import {
  FooterLogoWrapper,
  TopWrapper,
  BottomWrapper,
  FooterSocials,
  LinkToMain,
} from './Footer.styled';
import { Divider } from '../Main/Main.styled';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Divider />
        <TopWrapper>
          <FooterLogoWrapper>
            <svg width={31} height={18}>
              <use href={sprite + '#icon-bgAsset'}></use>
            </svg>
            <span>ecosolution</span>
            <svg width={60} height={18}>
              <use href={sprite + '#icon-GREENERGY-FOR-LIFE'}></use>
            </svg>
          </FooterLogoWrapper>
          <LinkToMain to="main" smooth={true}>
            <span>
              <svg width={16} height={16}>
                <use href={sprite + '#icon-arrow-up'}></use>
              </svg>
            </span>
          </LinkToMain>
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
        </TopWrapper>
        <BottomWrapper>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </BottomWrapper>
      </Container>
    </footer>
  );
};

export default Footer;
