import React from 'react';
import Container from '../Container';
import MySlider from '../Slider/Slider';
import { CasesSection } from './Cases.styled';

const Cases = () => {
  return (
    <CasesSection id="cases">
      <Container>
        <MySlider />
      </Container>
    </CasesSection>
  );
};

export default Cases;
