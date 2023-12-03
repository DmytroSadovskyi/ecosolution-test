import styled from 'styled-components';

export const MainContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 480px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1440px;
    padding: 0 30px;
    margin: 0 auto;
  }
`;
