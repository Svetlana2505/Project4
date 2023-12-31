import React from 'react';
import { SuccessBlock, Image, Text, Count, Button } from './Success.styled';
import success from '../../../assets/success.svg';

import { Link } from 'react-router-dom';

export const Success = ({ count }) => {
  return (
    <SuccessBlock>
      <Image src={success} alt="Success" />
      <Text>Успешно!</Text>
      <Count>Всем {count} пользователям отправлено приглашение.</Count>
      <Link to={'/'}>
        <Button>Назад</Button>
      </Link>
    </SuccessBlock>
  );
};
