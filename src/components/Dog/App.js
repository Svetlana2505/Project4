import { SelectCart } from './Select/Select';
import { useState } from 'react';
import { fetchDogId } from './api';
import { DogCart } from './DogCart/DogCart';
import { Box } from './Select/Select.styled';

const ERROR = 'Что-то пошло не так';
const LOADING = 'загрузка';

export const Dog = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = async id => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchDogId(id);
      setDog(data);
    } catch (error) {
      setError(ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <SelectCart fetchDog={fetchDog} />
      {isLoading && <h1>{LOADING}</h1>}
      {error && <div>{error}</div>}
      {dog && !isLoading && <DogCart dog={dog} />}
    </Box>
  );
};
