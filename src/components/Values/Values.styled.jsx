import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 24px;

  color: #173d33;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 1;
  }
`;
export const Text = styled.p`
  margin-bottom: 36px;
  color: #173d33;
  text-align: justify;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const ValuesList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 36px;
`;
export const Value = styled.li`
  height: 197px;
  padding: 13px 12px 0 12px;
  background-color: #eaedf1;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 33px;
  border-bottom: 1px solid #97d28b;
`;

export const ValueTitle = styled.h3`
  color: #173d33;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
`;
export const ValueDescr = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export const StatTitle = styled.h2`
  position: relative;
  margin-bottom: 96px;
  color: #173d33;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  &::after {
    content: '';
    position: absolute;
    top: 102px;
    left: 50%;
    transform: translate(-50%) rotate(90deg);
    width: 48px;
    height: 1px;

    background: #97d28b;
  }
`;

export const StatDescr = styled.p`
  color: #173d33;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;

  & span {
    margin-right: 8px;
    color: #97d28b;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }
`;
