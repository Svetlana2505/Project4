import styled from 'styled-components';

export const StyledForm = styled.form`
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  font-family: 'Roboto Serif';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  width: 231px;
  height: 35px;
  border-radius: 5px 0 0 5px;
  outline: none;
  border: none;
  padding-left: 10px;
  color: #2aa5a0;
`;

export const StyledButton = styled.button`
  border-radius: 0 5px 5px 0;
  outline: none;
  border: none;
  height: 35px;
  padding: 0 4px;
  background-image: linear-gradient(130deg, #e3535d, #2aa5a0);
  color: white;
`;
