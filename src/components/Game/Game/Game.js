import { Progress, ProgressInner, List, Text } from './Game.styled';

export const Game = ({
  question: { title, variants },
  onClickVariant,
  questions,
  step,
}) => {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <Progress>
        <ProgressInner style={{ width: `${percentage}%` }}></ProgressInner>
      </Progress>
      <Text>{title}</Text>
      <List>
        {variants.map((elem, index) => (
          <li onClick={() => onClickVariant(index)} key={elem}>
            {elem}
          </li>
        ))}
      </List>
    </>
  );
};
