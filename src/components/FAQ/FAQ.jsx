import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';

const FAQ = () => {
  return (
    <section>
      <Container>
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <p>How do wind turbines and solar panels work together in a renewable energy system?</p>
            <p>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          </li>
          <li>
            <p>
              What sets EcoSolution's renewable energy solutions apart from others on the market?
            </p>
            <p>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          </li>
          <li>
            <p>
              How can businesses and communities benefit from integrating renewable energy solutions
              from EcoSolution?
            </p>
            <p>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          </li>
          <li>
            <p>
              What measures does EcoSolution take to ensure the environmental sustainability of its
              products?
            </p>
            <p>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          </li>
          <li>
            <p>
              How does EcoSolution engage with local communities and support a just transition to
              renewable energy?
            </p>
            <p>
              Wind turbines and solar panels generate electricity through different mechanisms. Wind
              turbines harness the kinetic energy of the wind to turn blades, which then drive a
              generator. Solar panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these technologies complement
              each other by providing a continuous and reliable power supply. Wind power is often
              more abundant during certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          </li>
        </ul>
        <p>Didn't find the answer to your question?</p>
        <a href="#contacts">
          <svg width={14} height={14}>
            <use href={sprite + '#icon-ellipse'}></use>
          </svg>
          Contact Us
        </a>
      </Container>
    </section>
  );
};

export default FAQ;
