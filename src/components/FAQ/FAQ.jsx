import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';
import { Answer, Item, Question, Title, List, MoreQuestion, ContactLink } from './FAQ.styled';
import { useState } from 'react';
import data from '../../data.json';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleItemClick = index => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <List>
          {data.map((item, index) => (
            <Item key={index} className={openIndex === index ? 'open' : ''}>
              <Question
                onClick={() => handleItemClick(index)}
                $opened={openIndex === index ? true : false}
              >
                <svg>
                  <use href={sprite + (openIndex === index ? '#icon-minus' : 'icon-plus')}></use>
                </svg>
                {item.question}
              </Question>
              {openIndex === index && <Answer>{item.answer}</Answer>}
            </Item>
          ))}
        </List>
        <MoreQuestion>Didn't find the answer to your question?</MoreQuestion>
        <ContactLink
          to="contacts"
          smooth={true}
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
