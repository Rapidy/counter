import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserList from './features/components/UsersList/UserList';
import CounterLog from './features/components/CounterLog/CounterLog';

import { users, logs } from './app/mocks/mocks';
import { getUsers, setUsers } from './app/redux/slices/userSlice';
import { getCounterLog, setCounterLog } from './app/redux/slices/counterLogSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

import Layout from './features/components/Layout/Layout';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setUsers(users));
    dispatch(setCounterLog({ logs, users }));
  }, [dispatch]);

  const userList = useAppSelector(getUsers);
  const counterLog = useAppSelector(getCounterLog);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="counter/:id"
          element={
            <>
              <UserList users={userList} listName="Счетчик" />
              <CounterLog logs={counterLog} />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
