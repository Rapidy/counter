import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.scss';

import { Counter } from './features/components/counter/Counter';
import UserList from './features/components/UsersList/UserList';

import { users } from './app/mocks/mocks';

function App() {
  return (
    <div>
      <Routes location="/">
        <Route
          index
          element={<UserList users={users} listName="Счетчик 1" />}
        />
      </Routes>
    </div>
  );
}

export default App;
