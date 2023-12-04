import styled from 'styled-components';

export const ContactsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  color: #173d33;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 36px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
    font-size: 48px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  & li:first-child {
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
      margin-bottom: 12px;
    }
  }
`;

export const ContactType = styled.p`
  margin-bottom: 8px;
  color: #173d33;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #173d33;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  & svg {
    stroke: #173d33;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    svg {
      stroke: #97d28b;
    }
  }
`;

export const Text = styled.span`
  @media screen and (max-width: 1279px) {
    width: 212px;
  }
`;

export const FirstPhone = styled(ContactLink)`
  margin-bottom: 12px;
`;

export const SecondPhone = styled(ContactLink)``;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
  padding: 12px;
  & svg {
    stroke: #173d33;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1), fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    svg {
      stroke: #97d28b;
      fill: #97d28b;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;

export const FormWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 342px;
    padding: 36px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    padding: 40px;
  }
  padding: 36px 12px;
  background-color: #eaedf1;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:not(:last-of-type) {
    margin-bottom: 28px;
  }

  &:last-of-type {
    margin-bottom: 16px;
  }
`;

export const FormLabel = styled.label`
  color: #173d33;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const FormInput = styled.input`
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid ${props => (props.$err ? ' #D28B8B' : '#97d28b')};
  background-color: transparent;

  &::placeholder {
    color: #173d33;
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const ErrorMessage = styled.span`
  color: #d28b8b;
  text-align: right;
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;

  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #97d28b;
  background-color: transparent;
  resize: none;
  height: 147px;

  &::placeholder {
    color: #173d33;
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const FormButton = styled.button`
  display: flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  border: 1px solid #97d28b;

  background-color: #eaedf1;
  color: #173d33;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.13;
  letter-spacing: -0.64px;

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:hover):not(:focus) {
    border: 1px solid #97d28b;
  }

  &:hover,
  &:focus {
    background-color: #173d33;
    color: #97d28b;
    border: none;
  }

  & span {
    width: 32px;
    height: 32px;
    border-radius: 100px;
    background-color: #97d28b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    stroke: #173d33;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #97d28b;

  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;
