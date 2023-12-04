import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';
import image1 from '../../assets/images/wind-farms-fields.jpg';
import image2 from '../../assets/images/man-worker-firld-by-solar-panels.jpg';

import {
  DescriptionWrapper,
  Title,
  Text,
  ValuesList,
  Value,
  ImageItem,
  InnerWrapper,
  ValueTitle,
  ValueDescr,
} from './Values.styled';

const Values = () => {
  return (
    <section id="values">
      <Container>
        <DescriptionWrapper>
          <Title>Main values of our company</Title>
          <Text>
            EcoSolution envisions a world where sustainable energy solutions power a brighter and
            cleaner future for all. We aspire to be at the forefront of the global shift towards
            renewable energy, leading the way in innovative technologies that harness the power of
            nature to meet the world's energy needs.
          </Text>
        </DescriptionWrapper>
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
          <ImageItem>
            <img src={image1} alt="" />
          </ImageItem>
          <ImageItem>
            <img src={image2} alt="" />
          </ImageItem>
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
      </Container>
    </section>
  );
};

export default Values;
