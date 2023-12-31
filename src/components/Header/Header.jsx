import { useEffect, useState } from 'react';
import EllipseIcon from '../../assets/icons/arrow-down.svg?react';

import sprite from '../../assets/sprite.svg';
import {
  PageHeader,
  InnerContainer,
  LogoWrapper,
  NavWrapper,
  BurgerButton,
  ContactLink,
} from './Header.styled';
import BurgerMenu from '../BurgerMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
    const body = document.body;
    body.classList.toggle('menu-open');
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
    <PageHeader $scrolled={isScrolled.toString()} id="header">
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
        <NavWrapper>
          <BurgerButton type="button" onClick={handleToggleMenu}>
            <svg width={18} height={18}>
              <use href={sprite + '#icon-menu'}></use>
            </svg>
          </BurgerButton>
          <ContactLink to="contacts" smooth={true}>
            Get in touch
            <EllipseIcon />
          </ContactLink>
        </NavWrapper>
      </InnerContainer>
      {isOpen && <BurgerMenu handleToggle={handleToggleMenu} />}
    </PageHeader>
  );
};

export default Header;
