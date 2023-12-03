import styled from 'styled-components';

export const StatTitle = styled.h2`
  max-width: 368px;
  margin: 0 auto 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    max-width: 492px;
    margin-bottom: 16px;
    font-size: 48px;
    line-height: 48px;
  }
  color: #173d33;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
`;

export const StatDescr = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #173d33;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;

  @media screen and (min-width: 768px) {
    gap: 24px;
    font-size: 28px;
    line-height: 1.7;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 1;
  }

  & span {
    font-family: Oswald;
    color: #97d28b;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 100px;
      font-weight: 700;
      line-height: 100px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 164px;
      font-weight: 700;
      line-height: 164px;
    }
  }
`;

export const Divider = styled.div`
  background-color: #97d28b;
  width: 1px;
  height: 48px;
  margin: 0 auto 24px;
  @media screen and (min-width: 1280px) {
    height: 87px;
    margin-bottom: 16px;
  }
`;
