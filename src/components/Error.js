import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { queries } from 'styles';
import Button from 'components/Button';

Error.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Error({ children, onClick }) {
  return (
    <ErrorWrapper>
      {children}
      <Button onClick={onClick}>Try again</Button>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid crimson;
  color: crimson;
  border-radius: 4px;
  padding: 8px;
  width: 100%;

  @media ${queries.desktop} {
    width: 500px;
  }
`;
