import { Item, StyledImage } from '../Users/Users.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const User = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onChangeInvites,
  isInvited,
}) => (
  <Item>
    <StyledImage src={avatar} alt="" />

    <div>
      <h3>
        {first_name} {last_name}
      </h3>
      <p>{email}</p>
    </div>
    <p onClick={() => onChangeInvites(id)}>
      {isInvited ? <AiOutlineMinus /> : <AiOutlinePlus />}
    </p>
  </Item>
);
