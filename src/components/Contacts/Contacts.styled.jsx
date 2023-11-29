import styled from 'styled-components';

export const Title = styled.h2`
  color: #173d33;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
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

export const FirstPhone = styled(ContactLink)`
  margin-bottom: 12px;
`;

export const SecondPhone = styled(ContactLink)``;
