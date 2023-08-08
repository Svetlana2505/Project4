import styled from 'styled-components';

export const Progress = styled.div`
  height: 10px;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
  margin-bottom: 25px;
`;

export const Text = styled.h1`
  color: #66bbcc;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const ProgressInner = styled.div`
  height: 100%;
  border-radius: 30px;
  width: 80%;
  background: rgb(18, 231, 48);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(
    90deg,
    rgba(18, 231, 48, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 15px;
    border: 2px solid #66bbcc;
    border-radius: 15px;
    margin-bottom: 10px;
    color: #66bbcc;
    cursor: pointer;
  }
`;
