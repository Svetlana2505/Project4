import { AiFillStepBackward } from 'react-icons/ai';
import { StyledLink } from 'components/Dog/Select/Select.styled';
import { useState } from 'react';
import { TodoForm } from '../TodoForm/TodoForm';
import { Todo } from '../Todo/Todo';
import { Wrapper } from './List.styled';

export const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = value => {
    if (value) {
      const newTask = {
        id: Math.random(),
        task: value,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = id => {
    setTasks([...tasks.filter(obj => obj.id !== id)]);
  };

  const toggle = id => {
    setTasks([
      ...tasks.map(task =>
        task.id === id ? { ...task, completed: true } : { ...task }
      ),
    ]);
  };

  return (
    <Wrapper>
      <StyledLink to="/">
        <AiFillStepBackward /> back
      </StyledLink>
      <h1>Какой план на сегодня?</h1>
      <h2>Список задач: {tasks.length}</h2>
      <TodoForm addTask={addTask} />
      {tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggle={toggle}
        />
      ))}
    </Wrapper>
  );
};
