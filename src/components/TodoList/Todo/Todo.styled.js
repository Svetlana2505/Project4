import styled from 'styled-components';

export const WrapperTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 310px;
  margin: 0 auto;
  height: 35px;
  background-color: white;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &.active {
    text-decoration: line-through;
  }
`;

export const Task = styled.div`
  font-weight: 600;
  font-size: 15px;
  width: 400px;
  text-align: start;
  overflow: hidden;
`;
