// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  ContactContainer,
  Title,
  Form,
  Input,
  TextArea,
  SubmitButton,
  ContactInfo,
  InfoItem,
  InfoLink,
} from '../../styles/styles';

const Contact = () => {
  return (
    <ContactContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title>Contact Us</Title>
        <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" rows="5" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
        <ContactInfo>
          <InfoItem>
            Email:{' '}
            <InfoLink href="mailto:info@dataharvestlabs.com">
              info@dataharvestlabs.com
            </InfoLink>
          </InfoItem>
          <InfoItem>
            Phone: <InfoLink href="tel:+917006038395">+91 70060 38395</InfoLink>
          </InfoItem>
          <InfoItem>Address: Srinagar, Valley of Kashmir, 190001</InfoItem>
        </ContactInfo>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;
