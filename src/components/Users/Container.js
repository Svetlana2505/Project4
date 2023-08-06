import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: ${({ margin }) => margin || '0 auto'};
  width: ${({ width }) => width || '300px'};
  padding: ${({ padding }) => padding || '20px 0'};
`;

export const Container = props => {
  return <StyledContainer {...props} />;
};
