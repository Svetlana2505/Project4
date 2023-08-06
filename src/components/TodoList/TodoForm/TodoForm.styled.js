import styled from 'styled-components';

export const StyledForm = styled.form`
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
  border-radius: 5px;
  margin-bottom: 15px;

  input {
    font-family: 'Roboto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    width: 80%;
    height: 35px;
    border-radius: 5px 0 0 5px;
    outline: none;
    border: none;
    padding-left: 10px;
    color: #2aa5a0;
  }

  button {
    width: 80px;
    border-radius: 0 5px 5px 0;
    outline: none;
    border: none;
    height: 35px;
    padding: 0 8px;
    background-image: linear-gradient(130deg, #e3535d, #2aa5a0);
    color: white;
  }
`;
