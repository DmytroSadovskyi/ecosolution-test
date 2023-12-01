import styled from 'styled-components';
import { LogoWrapper } from '../Header/Header.styled';
import { Link as ScrollLink } from 'react-scroll';

export const FooterLogoWrapper = styled(LogoWrapper)`
  margin-right: 18px;
  margin-bottom: 24px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
`;

export const FooterSocials = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
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
