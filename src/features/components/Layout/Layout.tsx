import React from 'react';
import css from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { counters } from '../../../app/mocks/mocks';
import {
  getCounters,
  setCounters
} from '../../../app/redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setCounters(counters));
  }, [dispatch]);

  const counterList = useAppSelector(getCounters);

  return (
    <div className={css.root}>
      <div className={css.container}>
        <Sidebar counters={counterList} />
        <div className={css.wrapper}>
          <Header />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
