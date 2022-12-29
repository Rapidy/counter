import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.scss';

import { Counter } from './features/components/counter/Counter';
import UserList from './features/components/UsersList/UserList';
import CounterList from './features/components/CounterList/CounterList';

import { users, counters } from './app/mocks/mocks';

function App() {
  return (
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Routes location="/">
            <Route
              index
              element={<>
                <UserList users={users} listName="Счетчик 1" />
                <CounterList counters={counters} />
              </>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
