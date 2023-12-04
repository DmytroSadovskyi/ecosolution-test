import React, { useState, useEffect } from 'react';

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

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = link => {
    handleToggle();
    setActiveLink(link);
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <MenuWrapper>
        <CloseButton onClick={handleToggle} aria-label="close-button">
          <svg width={20} height={20}>
            <use href={sprite + '#icon-iconamoon_close-light'}></use>
          </svg>
          close
        </CloseButton>
        <Divider />
        <InnerWrapper>
          <Menu>
            <li>
              <MenuLink
                to="main"
                smooth={true}
                offset={-130}
                onClick={() => {
                  handleLinkClick('main');
                }}
                spy={true}
                activeClass="active"
                className={activeLink === 'main' ? 'active' : ''}
              >
                Main
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="values"
                smooth={true}
                offset={-130}
                onClick={() => {
                  handleLinkClick('values');
                }}
                spy={true}
                activeClass="active"
                className={activeLink === 'values' ? 'active' : ''}
              >
                About
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="cases"
                smooth={true}
                offset={-130}
                onClick={() => {
                  handleLinkClick('cases');
                }}
                spy={true}
                activeClass="active"
                className={activeLink === 'cases' ? 'active' : ''}
              >
                Cases
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="faq"
                smooth={true}
                offset={-130}
                onClick={() => {
                  handleLinkClick('faq');
                }}
                spy={true}
                activeClass="active"
                className={activeLink === 'faq' ? 'active' : ''}
              >
                FAQ
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
            <li>
              <MenuLink
                to="contacts"
                smooth={true}
                offset={-130}
                onClick={() => {
                  handleLinkClick('contacts');
                }}
                spy={true}
                activeClass="active"
                className={activeLink === 'contacts' ? 'active' : ''}
              >
                Contact Us
                <svg width={16} height={16}>
                  <use href={sprite + '#icon-arrow-right-45deg-small'}></use>
                </svg>
              </MenuLink>
            </li>
          </Menu>
          <SocialsList>
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
          </SocialsList>
        </InnerWrapper>
      </MenuWrapper>
    </Backdrop>
  );
};

export default BurgerMenu;
