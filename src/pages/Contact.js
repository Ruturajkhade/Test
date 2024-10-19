import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  padding: 4rem;
  background-color: #fafafa;
  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    input, textarea {
      margin: 1rem 0;
      padding: 1rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      padding: 1rem;
      background-color: #2980b9;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      &:hover {
        background-color: #3498db;
      }
    }
  }
`;
