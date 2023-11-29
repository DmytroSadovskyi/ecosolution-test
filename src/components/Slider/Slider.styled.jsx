import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSliderContainer = styled.div`
  position: relative;
`;

export const StyledCustomDots = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
`;

export const StyledDot = styled.span`
  margin: 0 5px;
  font-size: 16px;
  color: ${({ active }) => (active ? '#007bff' : '#ccc')};
  cursor: pointer;
  transition: color 0.3s ease;
`;

export const StyledSlickPrevNext = styled.div`
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const StyledPrev = styled(StyledSlickPrevNext)``;
