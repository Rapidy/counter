import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserList from './features/components/UsersList/UserList';

import { users } from './app/mocks/mocks';
import { getUsers, setUsers } from './app/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

import Layout from './features/components/Layout/Layout';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setUsers(users));
  }, [dispatch]);

  const userList = useAppSelector(getUsers);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/:id"
          element={<UserList users={userList} listName="Счетчик" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
