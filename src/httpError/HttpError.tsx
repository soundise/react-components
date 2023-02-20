import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

export interface IHttpError {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
  children?: ReactNode;
}

export const HttpError = ({
  icon,
  title,
  description,
  children,
}: IHttpError) => (
  <Wrapper data-testid="http-error">
    <Icon>{icon}</Icon>
    <Message>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Message>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 1232px;
  height: 100%;
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Icon = styled.div`
  font-size: 4rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;
