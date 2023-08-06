import { fetchDogs } from '../api';
import { useEffect, useState } from 'react';
import { StyledLink } from './Select.styled';

import Select from 'react-select';
import { AiFillStepBackward } from 'react-icons/ai';

const ERROR = 'Что-то пошло не так';

export const SelectCart = ({ fetchDog }) => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = breeds.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedDog = await fetchDogs();
        setBreeds(fetchedDog);
      } catch (error) {
        setError(ERROR);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Select
        onChange={option => fetchDog(option.value)}
        options={options}
        isLoading={isLoading}
        style={{ marginBottom: '20' }}
      />
      <StyledLink to="/">
        <AiFillStepBackward /> back
      </StyledLink>
      {error && <div>{error}</div>}
    </>
  );
};
