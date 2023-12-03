import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';

import {
  Answer,
  Item,
  Question,
  Title,
  List,
  MoreQuestion,
  ContactLink,
  InnerContainer,
  QuestionWrapper,
  Wrapper,
} from './FAQ.styled';
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
        <InnerContainer>
          <Title>Frequently Asked Questions</Title>
          <List>
            {data.map((item, index) => (
              <Item key={index}>
                <Wrapper>
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path d="M7 14H21" stroke="#173D33" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path d="M7 14H21" stroke="#97D28B" />
                      <path d="M14 21V7" stroke="#97D28B" />
                    </svg>
                  )}
                  <Question
                    onClick={() => handleItemClick(index)}
                    $opened={openIndex === index ? true : false}
                  >
                    {item.question}
                  </Question>
                </Wrapper>
                {openIndex === index && <Answer>{item.answer}</Answer>}
              </Item>
            ))}
          </List>
          <QuestionWrapper>
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
                <use
                  href={isHovered ? sprite + '#icon-arrow-down' : sprite + '#icon-ellipse'}
                ></use>
              </svg>
            </ContactLink>
          </QuestionWrapper>
        </InnerContainer>
      </Container>
    </section>
  );
};

export default FAQ;
