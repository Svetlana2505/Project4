import axios from 'axios';
import { Users } from './Users/Users';
import { useEffect, useState } from 'react';
import { Success } from './Success/Success';
import { Container } from 'components/Container';

const ERROR = 'Что-то пошло не так';

export const User = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get('https://reqres.in/api/users');
        setUsers(data.data);
      } catch (error) {
        setError(ERROR);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  const onChangeInvites = id => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  };

  return (
    <div>
      <Container>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {success ? (
          <Success count={invites.length} />
        ) : (
          <Users
            users={users}
            searchValue={searchValue}
            onChangeSearchValue={e => setSearchValue(e.target.value)}
            invites={invites}
            onChangeInvites={onChangeInvites}
            success={() => setSuccess(true)}
          />
        )}
      </Container>
    </div>
  );
};
