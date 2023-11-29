import styled from 'styled-components';

export const PageHeader = styled.header`
  min-height: 112px;
  padding-top: 36px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${props => (props.scrolled === 'true' ? '#fff' : '#f3f5fa')};
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 11px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  width: 270px;

  & span {
    font-family: 'allround';
    width: 170px;
    font-size: 33px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.32px;
    color: #173d33;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    & span {
      color: #97d28b;
    }
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 500px;
  background: #dcefd8;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #97d28b;
  }
`;

export const ContactLink = styled.a.attrs(props => ({
  hovered: undefined,
}))`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 500px;
    background: #97d28b;
    color: #173d33;
    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #173d33;
      color: #97d28b;
    }
  }
`;
