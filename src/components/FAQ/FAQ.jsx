import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';
import { Answer, Item, Question, Title, List, MoreQuestion, ContactLink } from './FAQ.styled';
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <List>
          <Item>
            <Question>
              How do wind turbines and solar panels work together in a renewable energy system?
            </Question>
            <Answer>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </Item>
          <Item>
            <Question>
              What sets EcoSolution's renewable energy solutions apart from others on the market?
            </Question>
            <Answer>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </Item>
          <Item>
            <Question>
              How can businesses and communities benefit from integrating renewable energy solutions
              from EcoSolution?
            </Question>
            <Answer>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </Item>
          <Item>
            <Question>
              What measures does EcoSolution take to ensure the environmental sustainability of its
              products?
            </Question>
            <Answer>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </Item>
          <Item>
            <Question>
              How does EcoSolution engage with local communities and support a just transition to
              renewable energy?
            </Question>
            <Answer>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </Answer>
          </Item>
        </List>
        <MoreQuestion>Didn't find the answer to your question?</MoreQuestion>
        <ContactLink
          href="#contacts"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          hovered={isHovered.toString()}
        >
          Contact Us
          <svg width={14} height={14}>
            <use href={isHovered ? sprite + '#icon-arrow-down' : sprite + '#icon-ellipse'}></use>
          </svg>
        </ContactLink>
      </Container>
    </section>
  );
};

export default FAQ;
