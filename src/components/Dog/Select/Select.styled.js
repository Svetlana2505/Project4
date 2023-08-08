import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  padding-top: 50px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  position: fixed;
  top: 10px;

  align-items: center;
  font-weight: 700;
  color: gray;
`;
