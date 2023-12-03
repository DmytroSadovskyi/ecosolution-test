import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Pagination = styled.p`
  color: rgba(23, 61, 51, 0.25);
  font-family: 'Fira Sans', sans-serif;
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
  @media screen and (min-width: 1280px) {
    align-self: flex-end;
    margin: 0 auto;
  }

  & span {
    color: #173d33;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.04em;
    text-align: justify;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const ControlsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -8px;
      width: 1px;
      background-color: #97d28b;
      height: 100%;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const BtnArrowNext = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 100px;
  border: 1px solid #173d33;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    stroke: #173d33;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    border: 1px solid #97d28b;
    svg {
      stroke: #97d28b;
    }
  }
`;

export const BtnArrowPrev = styled.button`
  width: 66px;
  height: 66px;
  border-radius: 100px;
  border: 1px solid #173d33;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    stroke: #173d33;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    border: 1px solid #97d28b;
    svg {
      stroke: #97d28b;
    }
  }
`;

export const Slide = styled.div`
  overflow: hidden;
  max-width: 320px;
  & img {
    height: 168px;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    max-width: 342px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 596px;

    & img {
      height: 296px;
      object-fit: cover;
    }
  }
`;

export const DescrWrapper = styled.div`
  padding: 24px 12px 12px;
  background-color: #eaedf1;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
  height: 66px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 72px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    height: 60px;
    margin-bottom: 36px;
  }

  & p {
    color: #173d33;
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.04em;
    text-align: justify;
    max-width: 175px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
      max-width: 194px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 24px;
      line-height: 29px;
      max-width: 356px;
    }
  }

  & a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #97d28b;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background: #173d33;
      svg {
        stroke: #97d28b;
      }
    }

    & svg {
      stroke: #173d33;
      transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const TypeWrapper = styled.div`
  margin-top: 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.04em;
  text-align: justify;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
    margin-top: 34px;
  }

  & p {
    color: #173d33;
    text-align: justify;
    font-family: 'Fira Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;
