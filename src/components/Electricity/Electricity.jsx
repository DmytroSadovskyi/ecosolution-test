import Container from '../Container';
import { StatTitle, StatDescr, Divider } from './Electricity.styled';
import { useState, useEffect } from 'react';

const Electricity = () => {
  const electricityValue = 1134147814;
  const [value, setValue] = useState(electricityValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(prevValue => prevValue + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getValue = number => {
    const string = number.toLocaleString('en-US').replaceAll(',', '.');
    return string;
  };

  return (
    <section>
      <Container>
        <StatTitle>Electricity we produced for all time</StatTitle>
        <Divider />
        <StatDescr>
          <span>{getValue(value)}</span>kWh
        </StatDescr>
      </Container>
    </section>
  );
};

export default Electricity;
