import { Outlet } from 'react-router-dom';
import { Box, StyledLink } from './Layout.styled';
import { useLocation } from 'react-router-dom';
import { Container } from 'components/Container';

export const Layout = () => {
  const location = useLocation();

  return (
    <Box>
      <Container>
        <p>4 проекта на React </p>
        <ul>
          <li>
            <StyledLink to="/dog" state={{ from: location }}>
              Dog
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/users" state={{ from: location }}>
              Users
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/game" state={{ from: location }}>
              Game
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/todo" state={{ from: location }}>
              TodoList
            </StyledLink>
          </li>
        </ul>
      </Container>

      <Outlet />
    </Box>
  );
};
