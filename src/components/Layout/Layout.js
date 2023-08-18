import { Outlet } from 'react-router-dom';
import { Box, StyledLink } from './Layout.styled';
import { Container } from 'components/Container';

export const Layout = () => {
  return (
    <Box>
      <Container>
        <p>4 проекта на React </p>
        <ul>
          <li>
            <StyledLink to="/dog">Dog</StyledLink>
          </li>
          <li>
            <StyledLink to="/users">Users</StyledLink>
          </li>
          <li>
            <StyledLink to="/game">Game</StyledLink>
          </li>
          <li>
            <StyledLink to="/todo">TodoList</StyledLink>
          </li>
        </ul>
      </Container>

      <Outlet />
    </Box>
  );
};
