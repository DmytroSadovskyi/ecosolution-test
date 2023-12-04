import styled from 'styled-components';

export const MainContainer = styled.div`
  box-sizing: border-box;
  min-width: 360px;
  height: 100%;
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: none;
    padding: 0 30px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
