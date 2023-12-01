import { useEffect, useState } from 'react';

import sprite from '../../assets/sprite.svg';
import {
  PageHeader,
  InnerContainer,
  LogoWrapper,
  BurgerButton,
  ContactLink,
} from './Header.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isHeaderScrolled = currentScrollPos > 0;

      setIsScrolled(isHeaderScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <PageHeader $scrolled={isScrolled.toString()}>
      <InnerContainer>
        <LogoWrapper>
          <svg width={31} height={18}>
            <use href={sprite + '#icon-bgAsset'}></use>
          </svg>
          <span>ecosolution</span>
          <svg width={60} height={18}>
            <use href={sprite + '#icon-GREENERGY-FOR-LIFE'}></use>
          </svg>
        </LogoWrapper>
        <BurgerButton type="button" onClick={handleToggleMenu}>
          <svg width={18} height={18}>
            <use href={sprite + '#icon-menu'}></use>
          </svg>
        </BurgerButton>
        <ContactLink
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          hovered={isHovered}
        >
          Get in touch
          <svg width={14} height={14}>
            <use href={isHovered ? sprite + '#icon-arrow-down' : sprite + '#icon-ellipse'}></use>
          </svg>
        </ContactLink>
      </InnerContainer>
      {isOpen && <BurgerMenu handleToggle={handleToggleMenu} />}
    </PageHeader>
  );
};

export default Header;
