import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSliderContainer = styled.div``;

export const StyledCustomDots = styled.div`
  margin-bottom: 19px;
  color: rgba(23, 61, 51, 0.25);
  font-family: 'Fira Sans', sans-serif;
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;

  & span {
    color: #173d33;
  }
`;

export const ControlsWrapperAll = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ControlsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
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

  @media screen and (min-width: 768px) {
    bottom: -80px;
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

  @media screen and (min-width: 768px) {
    bottom: -80px;
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
  background-color: #eaedf1;
  & img {
    object-fit: cover;
    max-width: 100%;
  }
`;

export const DescrWrapper = styled.div`
  padding-right: 12px;
  padding-left: 12px;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 0;

  & p {
    width: 175px;
    color: #173d33;
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
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
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #97d28b;
  padding: 12px 0;

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
