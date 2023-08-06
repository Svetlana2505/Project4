import React from 'react';
import { SuccessBlock, Image, Text, Count, Button } from './Success.styled';

export const Success = ({ count }) => {
  return (
    <SuccessBlock>
      <Image src="/assets/success.svg" alt="Success" />
      <Text>Успешно!</Text>
      <Count>Всем {count} пользователям отправлено приглашение.</Count>
      <a href="/users">
        <Button>Назад</Button>
      </a>
    </SuccessBlock>
  );
};
