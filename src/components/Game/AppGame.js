import { AiFillStepBackward } from 'react-icons/ai';
import { StyledLink } from 'components/Dog/Select/Select.styled';
import { useState } from 'react';
import { Game } from './Game/Game';
import { Result } from './Result/Result';

import { Wrapper } from './Result/Result.styled';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

export const AppGame = () => {
  const [step, setStep] = useState(0);

  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = index => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <Wrapper style={{ background: '#E5E3E4' }}>
      <StyledLink to="/">
        <AiFillStepBackward /> back
      </StyledLink>
      {step !== questions.length ? (
        <Game
          question={question}
          onClickVariant={onClickVariant}
          step={step}
          questions={questions}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </Wrapper>
  );
};
