import styled from 'styled-components';
import { LogoWrapper } from '../Header/Header.styled';
import { Link as ScrollLink } from 'react-scroll';
import { Divider } from '../Main/Main.styled';

export const FooterDivider = styled(Divider)`
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const FooterLogoWrapper = styled(LogoWrapper)`
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const TopWrapper = styled.div`
  /* display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: baseline;
  } */
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  color: #173d33;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const FooterSocials = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  & svg {
    stroke: #173d33;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LinkToMain = styled(ScrollLink)`
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
`;
