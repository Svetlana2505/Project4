import styled from 'styled-components';

export const WrapperTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 35px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);

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
