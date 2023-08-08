import styled from 'styled-components';

export const SuccessBlock = styled.div`
  border-radius: 20px;
  margin: 50px auto;
  text-align: center;
  padding: 30px;
  background-color: white;
  animation: success-show 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
`;

export const Text = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Count = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: rgb(251, 80, 0);
  padding: 16px 15px;
  border-radius: 15px;
  font-size: 16px;
  color: #fff;
  width: 50%;
  border: 0;
  outline: none;
  box-shadow: 0 7px 10px rgba(251, 80, 0, 0.4);
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: rgb(255, 97, 24);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;
