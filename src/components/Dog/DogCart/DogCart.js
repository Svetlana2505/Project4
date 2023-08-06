import { Box } from './DogCart.styled';

export const DogCart = ({ dog: { url, breeds } }) => {
  const { temperament, life_span } = breeds[0];

  return (
    <Box>
      <img src={url} alt="" />
      <div>
        <p>продолжительность жизни: {life_span}</p>
        <p>темперамент: {temperament}</p>
      </div>
    </Box>
  );
};
