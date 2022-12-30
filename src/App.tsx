import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.scss';

import { Counter } from './features/components/counter/Counter';
import UserList from './features/components/UsersList/UserList';
import CounterList from './features/components/CounterList/CounterList';

import { users, counters } from './app/mocks/mocks';
import { getUsers, setUsers } from './app/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setUsers(users));
  }, []);

  const userList = useAppSelector(getUsers);

  return (
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Routes location="/">
            <Route
              index
              element={
                <>
                  <UserList users={userList} listName="Счетчик 1" />
                  <CounterList counters={counters} />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
