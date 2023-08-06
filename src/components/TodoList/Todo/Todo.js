import { RiDeleteBin5Line } from 'react-icons/ri';
import { WrapperTask, Task } from './Todo.styled';

export const Todo = ({ task, deleteTask, toggle }) => {
  return (
    <WrapperTask className={task.completed ? 'active' : false}>
      <Task onClick={() => toggle(task.id)}>{task.task}</Task>
      <div>
        <RiDeleteBin5Line onClick={() => deleteTask(task.id)} />
      </div>
    </WrapperTask>
  );
};
