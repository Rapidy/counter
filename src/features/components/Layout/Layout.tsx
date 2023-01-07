import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { counters } from '../../../app/mocks/mocks';
import {
  getCounters,
  setCounters
} from '../../../app/redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.scss';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setCounters(counters));
  }, [dispatch]);

  const counterList = useAppSelector(getCounters);

  return (
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Sidebar counters={counterList} />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
