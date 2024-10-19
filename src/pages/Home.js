import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeSection>
      <h1>Welcome to My Portfolio</h1>
      <p>I am a passionate developer, creating impactful projects.</p>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  color: white;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }
`;
