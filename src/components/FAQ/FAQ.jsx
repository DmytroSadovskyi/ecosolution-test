import React from 'react';
import Container from '../Container';
import EllipseIcon from '../../assets/icons/arrow-down.svg?react';
import IconMinus from '../../assets/icons/minus.svg?react';
import IconPlus from '../../assets/icons/plus.svg?react';

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
  IconWrapper,
} from './FAQ.styled';
import { useState } from 'react';
import data from '../../data.json';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = index => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq">
      <Container>
        <InnerContainer>
          <Title>Frequently Asked Questions</Title>
          <List>
            {data.map((item, index) => (
              <Item key={index}>
                <Wrapper>
                  <IconWrapper>{openIndex === index ? <IconMinus /> : <IconPlus />}</IconWrapper>
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
            <ContactLink to="contacts" smooth={true}>
              Contact Us
              <EllipseIcon />
            </ContactLink>
          </QuestionWrapper>
        </InnerContainer>
      </Container>
    </section>
  );
};

export default FAQ;
