import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';
import {
  Title,
  Text,
  ValuesList,
  Value,
  InnerWrapper,
  ValueTitle,
  ValueDescr,
  StatTitle,
  StatDescr,
} from './Values.styled';

const Values = () => {
  return (
    <section>
      <Container>
        <Title>Main values of our company</Title>
        <Text>
          EcoSolution envisions a world where sustainable energy solutions power a brighter and
          cleaner future for all. We aspire to be at the forefront of the global shift towards
          renewable energy, leading the way in innovative technologies that harness the power of
          nature to meet the world's energy needs.
        </Text>
        <ValuesList>
          <Value>
            <InnerWrapper>
              <svg width={16} height={16}>
                <use href={sprite + '#icon-maximize-circle'}></use>
              </svg>
              <ValueTitle>Openness</ValueTitle>
            </InnerWrapper>

            <ValueDescr>to the world, people, new ideas and projects</ValueDescr>
          </Value>
          <Value>
            <InnerWrapper>
              <svg width={16} height={16}>
                <use href={sprite + '#icon-global-edit'}></use>
              </svg>
              <ValueTitle>Responsibility</ValueTitle>
            </InnerWrapper>
            <ValueDescr>
              we are aware that the results of our work have an impact on our lives and the lives of
              future generations
            </ValueDescr>
          </Value>
          <Value>
            <InnerWrapper>
              <svg width={16} height={16}>
                <use href={sprite + '#icon-cpu-charge'}></use>
              </svg>
              <ValueTitle>Innovation</ValueTitle>
            </InnerWrapper>

            <ValueDescr>
              we use the latest technology to implement non-standard solutions
            </ValueDescr>
          </Value>
          <Value>
            <InnerWrapper>
              <svg width={16} height={16}>
                <use href={sprite + '#icon-ranking'}></use>
              </svg>
              <ValueTitle>Quality</ValueTitle>
            </InnerWrapper>
            <ValueDescr>
              we do not strive to be the first among others, but we want to be the best in our
              business
            </ValueDescr>
          </Value>
        </ValuesList>

        <StatTitle>Electricity we produced for all time</StatTitle>

        <StatDescr>
          <span>1.134.147.814</span>kWh
        </StatDescr>
      </Container>
    </section>
  );
};

export default Values;
