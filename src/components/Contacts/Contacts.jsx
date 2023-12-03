import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Container from '../Container';
import sprite from '../../assets/sprite.svg';
import {
  Title,
  ContactsList,
  ContactLink,
  ContactType,
  FirstPhone,
  SecondPhone,
  Text,
  SocialsWrapper,
  SocialLink,
  ContactForm,
  FormField,
  FormWrapper,
  FormLabel,
  FormInput,
  ErrorMessage,
  TextArea,
  FormButton,
  ContactsContainer,
} from './Contacts.styled';

const Contacts = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Wrong Fullname'),
      email: Yup.string().email('Enter a valid email address').required('Wrong Email'),
      phone: Yup.string()
        .matches(/^\d{12}$/, 'Enter a valid phone number')
        .required('Wrong Phone'),
      message: Yup.string(),
    }),
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });

  return (
    <section id="contacts">
      <Container>
        <Title>Contact us</Title>
        <ContactsContainer>
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
                  <Text>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Text>
                </ContactLink>
              </li>
              <li>
                <ContactType>Social Networks:</ContactType>
                <SocialsWrapper>
                  <SocialLink href="">
                    <svg width={24} height={24}>
                      <use href={sprite + '#icon-facebook'}></use>
                    </svg>
                  </SocialLink>
                  <SocialLink href="">
                    <svg width={24} height={24}>
                      <use href={sprite + '#icon-instagram'}></use>
                    </svg>
                  </SocialLink>
                </SocialsWrapper>
              </li>
            </ContactsList>
          </address>
          <FormWrapper>
            <ContactForm onSubmit={formik.handleSubmit}>
              <FormField>
                <FormLabel htmlFor="name">* Full name:</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  placeholder="John Rosie"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  $err={formik.touched.name && formik.errors.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <ErrorMessage>{formik.errors.name}</ErrorMessage>
                )}
              </FormField>

              <FormField>
                <FormLabel htmlFor="email">* E-mail:</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  placeholder="johnrosie@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  $err={formik.touched.email && formik.errors.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorMessage>{formik.errors.email}</ErrorMessage>
                )}
              </FormField>

              <FormField>
                <FormLabel htmlFor="phone">* Phone:</FormLabel>
                <FormInput
                  type="phone"
                  id="phone"
                  placeholder="380961234567"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  $err={formik.touched.phone && formik.errors.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <ErrorMessage>{formik.errors.phone}</ErrorMessage>
                )}
              </FormField>

              <FormField>
                <FormLabel htmlFor="message">Message:</FormLabel>
                <TextArea
                  type="textarea"
                  id="message"
                  placeholder="My message...."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
              </FormField>

              <FormButton type="submit">
                Send
                <span>
                  <svg width={16} height={16}>
                    <use href={sprite + '#icon-arrow-right'}></use>
                  </svg>
                </span>
              </FormButton>
            </ContactForm>
          </FormWrapper>
        </ContactsContainer>
      </Container>
    </section>
  );
};

export default Contacts;
