import styled from 'styled-components';
import { Link as MobileLink } from 'react-scroll';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  z-index: 20;
  padding: 36px 20px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 320px;
  padding: 24px 19px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  text-align: left;
  z-index: 30;

  @media screen and (min-width: 768px) {
    width: 320px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  padding: 0;
  align-items: end;
  color: #fff;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #97d28b;
    svg {
      stroke: #97d28b;
    }
  }
`;

export const Divider = styled.div`
  margin-bottom: 24px;
  height: 1px;
  background-color: #fff;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuLink = styled(MobileLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.25);
  font-family: Fira Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  & svg {
    stroke: rgba(255, 255, 255, 0.25);
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    color: #ffffff;

    svg {
      stroke: #ffffff;
    }
  }

  &.active {
    color: #97d28b;

    svg {
      stroke: #97d28b;
    }
  }
`;

export const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SocialsList = styled.ul`
  margin-top: auto;
  display: flex;
  gap: 8px;
  justify-content: flex-start;

  & svg {
    stroke: #fff;
    fill: #fff;
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
