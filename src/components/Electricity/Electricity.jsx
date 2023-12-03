import React from 'react';
import Container from '../Container';
import { StatTitle, StatDescr, Divider } from './Electricity.styled';

const Electricity = () => {
  return (
    <section>
      <Container>
        <StatTitle>Electricity we produced for all time</StatTitle>
        <Divider />
        <StatDescr>
          <span>1.134.147.814</span>kWh
        </StatDescr>
      </Container>
    </section>
  );
};

export default Electricity;
