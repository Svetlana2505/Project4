import { User } from './User';
import { BsSearch } from 'react-icons/bs';
import { AiFillStepBackward } from 'react-icons/ai';
import { List, Wrapper } from './Users.styled';
import { StyleInput } from './Users.styled';
import { Button } from './Users.styled';
import { StyledLink } from 'components/Dog/Select/Select.styled';

export const Users = ({
  users,
  searchValue,
  onChangeSearchValue,
  invites,
  onChangeInvites,
  success,
}) => {
  return (
    <Wrapper>
      {/* <Container> */}
      <StyleInput>
        <BsSearch />
        <input
          type="text"
          placeholder="Найти пользователя..."
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </StyleInput>

      <List>
        {users
          .filter(obj => {
            const fullName = (obj.first_name + obj.last_name).toLowerCase();
            return fullName.includes(searchValue.toLowerCase());
          })
          .map(obj => (
            <User
              key={obj.id}
              {...obj}
              onChangeInvites={onChangeInvites}
              isInvited={invites.includes(obj.id)}
            />
          ))}
      </List>
      {invites.length > 0 && (
        <Button onClick={success}>Отправить приглашение</Button>
      )}

      {/* </Container> */}
      <StyledLink to="/">
        <AiFillStepBackward /> back
      </StyledLink>
    </Wrapper>
  );
};
