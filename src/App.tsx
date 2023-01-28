import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserList from './features/components/UsersList/UserList';
import CounterLog from './features/components/CounterLog/CounterLog';

import { users, logs } from './app/mocks/mocks';
import { getUsers, setUsers } from './app/redux/slices/userSlice';
import { getCounterLog, setCounterLog } from './app/redux/slices/counterLogSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

import Layout from './features/components/Layout/Layout';
import PopUp from './features/components/PopUp/PopUp';
import useToggle from './features/hooks/useToggle';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setUsers(users));
    dispatch(setCounterLog({ logs, users }));
  }, [dispatch]);

  const userList = useAppSelector(getUsers);
  const counterLog = useAppSelector(getCounterLog);

  const [statePopUp, , togglePopUp] = useToggle();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="counter/:id"
          element={
            <>
              <UserList users={userList} listName="Счетчик" />
              <CounterLog logs={counterLog} />

              <button onClick={togglePopUp}>Open</button>
              <PopUp isActive={statePopUp} toggle={togglePopUp} title="Title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mole Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Mole Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Mole Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Mole Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Mole Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Mole Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mole
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mole Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Mole Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Mole Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Mole Lorem ipsum dolor, sit amet consectetur
                adipisicing elit.
              </PopUp>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
