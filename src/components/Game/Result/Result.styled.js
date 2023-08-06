import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  margin: 50px auto;
  border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  position: relative;
`;

export const StyledResul = styled.div`
  text-align: center;

  button {
    font-weight: bold;
    border-radius: 30px;
    border: 0;
    padding: 15px 30px;
    font-size: 20px;
    background-color: #66bbcc;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 0;
    color: #66bbcc;
  }

  img {
    width: 150px;
    margin: auto;
  }
`;
