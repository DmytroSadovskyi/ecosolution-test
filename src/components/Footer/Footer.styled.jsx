import styled from 'styled-components';
import { LogoWrapper } from '../Header/Header.styled';
import { Link as ScrollLink } from 'react-scroll';

export const Section = styled.footer`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
    gap: 16px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-of-type) {
      margin-bottom: 28px;
    }
    gap: 48px;
  }
`;

export const FooterLogoWrapper = styled(LogoWrapper)``;

export const FirstWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSocials = styled.ul`
  display: flex;

  gap: 8px;

  & svg {
    stroke: #173d33;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1), fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & a {
    &:hover,
    &:focus {
      svg {
        stroke: #97d28b;
        fill: #97d28b;
      }
    }
  }
`;

export const LinkToMain = styled(ScrollLink)`
  cursor: pointer;

  & span {
    width: 32px;
    height: 32px;
    border-radius: 100px;
    background-color: #97d28b;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      stroke: #173d33;
    }
  }

  &:hover,
  &:focus {
    span {
      background-color: #173d33;
      & svg {
        stroke: #97d28b;
      }
    }
  }

  &.tablet {
    display: none;
  }

  @media screen and (min-width: 768px) {
    &.tablet {
      display: inline;
    }

    &.mobile {
      display: none;
    }
  }
`;

export const FooterInfo = styled.p`
  color: #173d33;
  font-family: Fira Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
