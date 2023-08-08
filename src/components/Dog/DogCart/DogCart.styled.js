import styled from 'styled-components';

export const Box = styled.div`
  margin: auto;
  margin-top: 30px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const WrapperText = styled.div`
  margin-top: 15px;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 15px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: grey;

    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
