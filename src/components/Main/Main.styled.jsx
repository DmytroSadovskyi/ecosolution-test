import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

export const MainSection = styled.section`
  padding-top: 110px;

  @media screen and (min-width: 768px) {
    padding-top: 128px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 176px;
  }
`;

export const Description = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 43px;

    & > :nth-child(1) {
      grid-row: span 2;
      max-width: 300px;
    }
  }
  @media screen and (min-width: 1280px) {
    row-gap: 20px;

    & > :nth-child(1) {
      grid-row: span 2;
      max-width: 486px;
    }

    & > :not(:first-child) {
      margin-left: 130px;
    }
  }
`;

export const MainTitle = styled.h1`
  color: #173d33;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-align: left;

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
  color: #173d33;
  font-family: Fira Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.04em;
  word-spacing: 0.04em;

  max-width: 363px;

  @media screen and (min-width: 1280px) {
    text-align: justify;
  }
`;

export const LearnMore = styled(ScrollLink).attrs(props => ({
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

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    display: inline-flex;
    margin: 0;
  }

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
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
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
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    margin-bottom: 40px;
  }
`;

export const Copyright = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
`;
