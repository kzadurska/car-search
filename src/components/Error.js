import React from 'react';
import styled from 'styled-components';

import { queries } from 'styles';
import Button from 'components/Button';

const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: ##ffaeab;
border: 2px solid tomato;
color: tomato;
padding: 8px;

width: 100%;

@media ${queries.desktop} {
    width: 500px;
`;

export default function Error({ children, onClick }) {
  return (
    <ErrorWrapper>
      {children}
      <Button onClick={onClick}>Try again</Button>
    </ErrorWrapper>
  );
}
