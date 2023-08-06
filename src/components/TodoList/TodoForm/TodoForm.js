import { useState } from 'react';
import { StyledForm } from './TodoForm.styled';

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
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handlePress}
      />
      <button>Добавить</button>
    </StyledForm>
  );
};
