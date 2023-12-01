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
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 36px;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  width: 320px;
  padding: 24px 19px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  text-align: left;
  z-index: 30;
`;

export const CloseButton = styled.button`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  color: #fff;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
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
  color: #fff;
  font-family: Fira Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    stroke: #fff;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
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
  justify-content: space-between;
`;

export const SocialsList = styled.ul`
  margin-top: 64px;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;
