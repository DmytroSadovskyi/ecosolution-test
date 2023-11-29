import styled from 'styled-components';
import bg from '../../assets/images/mainBg/wind-turbine-clean-energy-mobile@1x.jpg';

export const MainSection = styled.section`
  padding-top: 146px;
`;

export const MainTitle = styled.h1`
  color: #173d33;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  width: 320px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1;
  }
`;

export const MainText = styled.p`
  margin-bottom: 24px;
  color: #173d33;
  max-width: 320px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: normal;
  text-align: justify;
  font-weight: 400;
`;

export const LearnMoreLink = styled.a.attrs(props => ({
  hovered: undefined,
}))`
  display: flex;
  width: 142px;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  border: 1px solid #97d28b;
  color: #173d33;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.13;
  letter-spacing: -0.64px;
  margin: 0 auto;
  margin-bottom: 24px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:hover):not(:focus) {
    border: 1px solid #97d28b;
  }

  &:hover,
  &:focus {
    background-color: #173d33;
    color: #97d28b;
    border: none;
  }

  & span {
    width: 32px;
    height: 32px;
    border-radius: 100px;
    background-color: #97d28b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    stroke: #173d33;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #97d28b;
  margin-bottom: 24px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  color: #173d33;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ImageWrapper = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 316px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
