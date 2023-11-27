import React from 'react';
import sprite from '../../assets/sprite.svg';
import Container from '../Container';

const Header = () => {
  return (
    <header>
      <Container>
        <svg width={170} height={40}>
          <use href={sprite + '#icon-logo'}></use>
        </svg>
        <button type="button">
          <svg width={16} height={16}>
            <use href={sprite + '#icon-menu'}></use>
          </svg>
        </button>
      </Container>
    </header>
  );
};

export default Header;
