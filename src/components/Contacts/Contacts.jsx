import React from 'react';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';
import {
  Title,
  ContactsList,
  ContactLink,
  ContactType,
  FirstPhone,
  SecondPhone,
} from './Contacts.styled';

const Contacts = () => {
  return (
    <section id="contacts">
      <Container>
        <Title>Contact us</Title>
        <address>
          <ContactsList>
            <li>
              <ContactType>Phone:</ContactType>
              <FirstPhone href="">
                <svg width={24} height={24}>
                  <use href={sprite + '#icon-call'}></use>
                </svg>
                38 (098) 12 34 567
              </FirstPhone>
              <SecondPhone href="">
                <svg width={24} height={24}>
                  <use href={sprite + '#icon-call'}></use>
                </svg>
                38 (093) 12 34 567
              </SecondPhone>
            </li>
            <li>
              <ContactType>E-mail:</ContactType>
              <ContactLink href="">
                <svg width={24} height={24}>
                  <use href={sprite + '#icon-sms'}></use>
                </svg>
                office@ecosolution.com
              </ContactLink>
            </li>
            <li>
              <ContactType>Address:</ContactType>
              <ContactLink href="">
                <svg width={24} height={24}>
                  <use href={sprite + '#icon-map'}></use>
                </svg>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactLink>
            </li>
            <li>
              <p>Social Networks:</p>
              <a href="">
                <svg width={24} height={24}>
                  <use href={sprite + '#icon-facebook'}></use>
                </svg>
              </a>
              <a href="">
                <svg width={24} height={24}>
                  <use href={sprite + '#icon-instagram'}></use>
                </svg>
              </a>
            </li>
          </ContactsList>
        </address>
        <form action="">
          <label htmlFor="name">* Full name:</label>
          <input type="text" id="name" placeholder="John Rosie" />
          <label htmlFor="email">* E-mail:</label>
          <input type="email" id="email" placeholder="johnrosie@gmail.com" />
          <label htmlFor="phone">* Phone:</label>
          <input type="phone" id="phone" placeholder="380961234567" />
          <label htmlFor="message">Message:</label>
          <input type="textarea" id="message" placeholder="My message...." />
          <button type="submit">Send</button>
        </form>
      </Container>
    </section>
  );
};

export default Contacts;
