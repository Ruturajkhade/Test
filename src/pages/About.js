import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <h1>About Me</h1>
      <p>
        I am a full-stack developer with experience in React, Node.js, and other technologies. 
        My passion is solving problems and building useful applications.
      </p>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  padding: 4rem;
  background-color: #f4f4f4;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
    color: #333;
  }
`;
