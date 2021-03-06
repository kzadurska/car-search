import styled from 'styled-components';
import { queries } from 'styles';

const Button = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  height: 30px;
  margin: 8px;
  cursor: pointer;

  @media ${queries.desktop} {
    width: 150px;
  }
`;

export default Button;
