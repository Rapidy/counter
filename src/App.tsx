import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './app/hooks';
import { logs, users } from './app/mocks/mocks';
import { getCounterLog, setCounterLog } from './app/redux/slices/counterLogSlice';
import { fetchCounters } from './app/redux/slices/counterSlice';
import { getUsers, setUsers } from './app/redux/slices/userSlice';
import { LocalStorageEnum } from './app/types';

import CounterLog from './features/components/CounterLog/CounterLog';
import Layout from './features/components/Layout/Layout';
import UserList from './features/components/UsersList/UserList';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(setUsers(users));
    dispatch(setCounterLog({ logs, users }));
    dispatch(fetchCounters());
  }, [dispatch]);

  const userList = useAppSelector(getUsers);
  const counterLog = useAppSelector(getCounterLog);

  React.useEffect(() => {
    const initialActiveCounter = localStorage.getItem(LocalStorageEnum.ACTIVE_COUNTER_ID);

    if (initialActiveCounter && location.pathname === '/') {
      navigate(`/counter/${initialActiveCounter}`);
    }
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="counter/:id"
          element={
            <>
              <UserList users={userList} />
              <CounterLog logs={counterLog} />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <div>Ты не туда попал</div>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
