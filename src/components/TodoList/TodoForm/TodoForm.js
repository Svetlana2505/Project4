import { useState } from 'react';
import { StyledForm, StyledInput, StyledButton } from './TodoForm.styled';

export const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addTask(value);
    setValue('');
  };

  const handlePress = e => {
    console.log(e);
    if (e === 'Enter') {
      setValue(e);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handlePress}
      />
      <StyledButton>Добавить</StyledButton>
    </StyledForm>
  );
};
