import { Box, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Box>
      <p>4 проекта на React </p>
      <ul>
        <li>
          <StyledLink to={'/dog'}>Dog</StyledLink>
        </li>
        <li>
          <StyledLink to={'/users'}>Users</StyledLink>
        </li>
        <li>
          <StyledLink to={'/game'}>Game</StyledLink>
        </li>
        <li>
          <StyledLink to={'/todo'}>TodoList</StyledLink>
        </li>
      </ul>
    </Box>
  );
};
