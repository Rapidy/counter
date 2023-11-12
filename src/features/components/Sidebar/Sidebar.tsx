import React from 'react';
import css from './Sidebar.module.scss';
import { Counter } from '../../../app/types';

import Button from '../../elements/Button/Button';
import CounterList from '../CounterList/CounterList';

interface Props {
  counters: Counter[];
}

const Sidebar: React.FC<Props> = ({ counters }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Ваши счетчики</h2>

      <Button className={css.createCounter} onClick={() => null} type="secondary">
        Создать счетчик
      </Button>

      <CounterList counters={counters} />
    </div>
  );
};

export default Sidebar;
