import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <svg width={269} height={40}>
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          <a href="#main">
            <svg width={24} height={24}>
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </a>
          <ul>
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
          </ul>
        </div>
        <div>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
