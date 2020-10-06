import styled from 'styled-components';
import { queries } from 'styles';

const Select = styled.select`
  width: 100%;
  height: 30px;
  margin: 8px;
  cursor: pointer;

  @media ${queries.desktop} {
    width: 200px;
  }
`;

export default Select;
