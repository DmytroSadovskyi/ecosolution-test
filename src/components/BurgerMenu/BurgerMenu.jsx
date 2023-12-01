import React from 'react';
import {
  Backdrop,
  CloseButton,
  Divider,
  Menu,
  MenuLink,
  MenuWrapper,
  InnerWrapper,
  SocialsList,
} from './BurgerMenu.styled';
import sprite from '../../assets/sprite.svg';

const BurgerMenu = ({ handleToggle }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleToggle();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <MenuWrapper>
        <CloseButton onClick={handleToggle}>
          <svg width={20} height={20}>
            <use href={sprite + '#icon-iconamoon_close-light'}></use>
          </svg>
          close
        </CloseButton>
        <Divider />
        <InnerWrapper>
          <Menu>
            <li>
              <MenuLink to="main" smooth={true} onClick={handleToggle}>
                Main
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="values" smooth={true} onClick={handleToggle}>
                About
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="cases" smooth={true} onClick={handleToggle}>
                Cases
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="faq" smooth={true} onClick={handleToggle}>
                FAQ
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink to="contacts" smooth={true} onClick={handleToggle}>
                Contact Us
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
          </Menu>
          <SocialsList>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </SocialsList>
        </InnerWrapper>
      </MenuWrapper>
    </Backdrop>
  );
};

export default BurgerMenu;
