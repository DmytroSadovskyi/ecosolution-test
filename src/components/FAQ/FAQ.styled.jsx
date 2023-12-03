import styled from 'styled-components';
import { Link as ScrolledLink } from 'react-scroll';

export const Title = styled.h2`
  color: #173d33;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 398px;
    margin: 0 auto;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 24px;

    & > :not(:nth-child(2)) {
      grid-column: 2;
    }
    & > :nth-child(2) {
      grid-column: 1;
      grid-row: 1 / span 2;
    }
    & > :last-child {
      align-self: end;
    }
  }
`;

export const List = styled.ul`
  margin-bottom: 36px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Item = styled.li`
  padding-top: 16px;
  border-top: 1px solid #97d28b;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Question = styled.p`
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: ${props => (props.$opened ? '16px' : '0px')};
  color: #173d33;
  text-align: justify;
  font-family: 'Fira Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const Answer = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: justify;
  padding-left: 24px;
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const MoreQuestion = styled.p`
  margin-bottom: 12px;
  color: #173d33;
  text-align: center;
  font-family: 'Fira Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const QuestionWrapper = styled.div`
  flex-grow: 1;
`;

export const ContactLink = styled(ScrolledLink).attrs(props => ({
  hovered: undefined,
}))`
  width: 130px;
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
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
`;
