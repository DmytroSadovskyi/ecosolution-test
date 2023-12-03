import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 36px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 122px;
  }
`;

export const Title = styled.h2`
  color: #173d33;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  max-width: 264px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 1;
    max-width: 365px;
  }
`;
export const Text = styled.p`
  position: relative;
  color: #173d33;
  text-align: justify;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -11px;
      width: 1px;
      background-color: #97d28b;
      height: 100%;
      @media screen and (min-width: 1280px) {
        left: -161px;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    max-width: 460px;
    justify-self: end;
  }
`;
export const ValuesList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;
export const Value = styled.li`
  height: 197px;
  padding: 13px 12px 0 12px;
  background-color: #eaedf1;
  @media screen and (min-width: 768px) {
    grid-column: span 1;
    grid-row: span 1;
  }

  @media screen and (min-width: 1280px) {
    width: 274px;
    height: 339px;
    padding: 48px 24px 0 24px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 33px;
  border-bottom: 1px solid #97d28b;

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
    padding-bottom: 94px;
  }
`;

export const ValueTitle = styled.h3`
  color: #173d33;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;
export const ValueDescr = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const ImageItem = styled.li`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    grid-column: span 2;
  }
`;
