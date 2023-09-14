import React from 'react';
import css from './Layout.module.scss';
import { Outlet, useParams } from 'react-router-dom';
import { counters, notifications } from '../../../app/mocks/mocks';

import { getCounters, setCounters } from '../../../app/redux/slices/counterSlice';
import {
  getNotifications,
  setNotifications
} from '../../../app/redux/slices/notificationSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(setCounters(counters));
    dispatch(setNotifications(notifications));
  }, [dispatch]);

  const counterList = useAppSelector(getCounters);
  const notificationsList = useAppSelector(getNotifications);
  const activeCounter = counterList.find((counter) => counter.id === id);

  return (
    <div className={css.root}>
      <div className={css.container}>
        <Sidebar counters={counterList} />
        <div className={css.wrapper}>
          <Header
            title={activeCounter?.name}
            goal={activeCounter?.goal}
            notifications={notificationsList}
          />

          <div className={css.counter}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
