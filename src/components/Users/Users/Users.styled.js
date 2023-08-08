import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 35px;
  margin: 100px auto;
  background-color: beige;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const StyleInput = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    height: 40px;
    padding-left: 55px;
    margin: 20px auto;
    border: 1px solid #e7eaef;
    border-radius: 10px;
    outline: none;
  }

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 30px;
    left: 40px;
    opacity: 0.3;
  }
`;

export const List = styled.ul`
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;

  :not(:last-child) {
    margin-bottom: 20px;
  }

  h3 {
    margin: 0;
    font-weight: 900;
    margin-left: 15px;
    margin-top: 5px;
    margin-left: 0;
    color: #182170;
  }

  p {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledImage = styled.img`
  border-radius: 30px;
  width: 50px;
  height: 50px;
`;

export const Button = styled.button`
  margin: 20px auto;
  margin-top: auto;
  background-color: rgb(251, 80, 0);
  padding: 16px 15px;
  border-radius: 15px;
  font-size: 16px;
  color: #fff;
  border: 0;
  outline: none;
  box-shadow: 0 7px 10px rgba(251, 80, 0, 0.4);
  cursor: pointer;
`;
