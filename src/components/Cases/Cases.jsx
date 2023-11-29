import React from 'react';
import Container from '../Container';
import MySlider from '../Slider/Slider';
import { CasesSection, Title } from './Cases.styled';

const Cases = () => {
  return (
    <CasesSection>
      <Container>
        <Title>Successful cases of our company</Title>
        <MySlider />
      </Container>
    </CasesSection>
  );
};

export default Cases;
