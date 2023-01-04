import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.scss';

import UserList from './features/components/UsersList/UserList';

import { users, counters } from './app/mocks/mocks';
import { getUsers, setUsers } from './app/redux/slices/userSlice';
import { getCounters, setCounters } from './app/redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

import Sidebar from './features/components/Sidebar/Sidebar';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setUsers(users));
    dispatch(setCounters(counters));
  }, [dispatch]);

  const userList = useAppSelector(getUsers);
  const counterList = useAppSelector(getCounters);

  return (
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Sidebar counters={counterList} />
          <Routes>
            <Route
              path="/:id"
              element={
                <>
                  <UserList users={userList} listName="Счетчик" />
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
