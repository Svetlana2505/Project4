import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  margin: 50px;
  text-align: center;
  font-weight: 900;
  font-size: 25px;

  p {
    font-size: 35px;
    background-color: #2aa5a0;
    background-image: linear-gradient(90deg, #e3535d, #2aa5a0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  li {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const StyledLink = styled(Link)`
  /* color: #e3535d; */
  background-image: linear-gradient(90deg, #e3535d, #2aa5a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`;
