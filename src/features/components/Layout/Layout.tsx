import React from 'react';
import css from './Layout.module.scss';
import { Outlet, useParams } from 'react-router-dom';
import { counters } from '../../../app/mocks/mocks';
import { getCounters, setCounters } from '../../../app/redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(setCounters(counters));
  }, [dispatch]);

  const counterList = useAppSelector(getCounters);
  const activeCounter = counterList.find((counter) => counter.id === id);

  return (
    <div className={css.root}>
      <div className={css.container}>
        <Sidebar counters={counterList} />
        <div className={css.wrapper}>
          <Header title="Название счетчика" goal={activeCounter?.goal} />

          <div className={css.counter}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
