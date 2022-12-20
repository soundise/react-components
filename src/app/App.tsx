import React from 'react';
import styled from 'styled-components';

export const App = () => (
  <Wrapper className="wrapper">
    <a href="https://soundise.com" target="_blank" rel="noreferrer">
      <Image
        src="https://assets.soundise.com/headers/header-github-readme-dark.svg"
        alt="Soundise React component library"
      />
    </a>
    <Heading className="heading">react-components</Heading>
    <Description>Soundise React component library</Description>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 48rem;
  min-height: calc(100vh - 4rem);
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Heading = styled.h1`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #26282e;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;

const Description = styled.p`
  font-weight: 700;
`;
