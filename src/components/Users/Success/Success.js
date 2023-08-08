import React from 'react';
import { SuccessBlock, Image, Text, Count, Button } from './Success.styled';
import success from '../../../assets/success.svg';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

export const Success = ({ count }) => {
  const location = useLocation();
  return (
    <SuccessBlock>
      <Image src={success} alt="Success" />
      <Text>Успешно!</Text>
      <Count>Всем {count} пользователям отправлено приглашение.</Count>
      <Link to={location?.state?.from}>
        <Button>Назад</Button>
      </Link>
    </SuccessBlock>
  );
};
