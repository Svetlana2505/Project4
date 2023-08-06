import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Dog } from './Dog/App';
import { User } from './Users/User';
import { AppGame } from './Game/AppGame';
import { Todo } from './TodoList/Todo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/dog" element={<Dog />} />
      <Route path="/users" element={<User />} />
      <Route path="/game" element={<AppGame />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};
