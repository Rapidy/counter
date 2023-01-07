import React from 'react';
import css from './CounterList.module.scss';
import { Counter } from '../../../app/types';
import { useAppDispatch } from '../../../app/hooks';
import {
  removeCounter,
  renameCounter
} from '../../../app/redux/slices/counterSlice';

import CounterItem from './CounterItem/CounterItem';
import { useParams } from 'react-router-dom';

interface Props {
  counters: Counter[];
}

const CounterList: React.FC<Props> = ({ counters }) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [activeCounter, setActiveCounter] = React.useState<string | undefined>(
    ''
  );

  const handleDeleteCounter = (id: string) => {
    dispatch(removeCounter(id));
  };

  const handleRenameCounter = (id: string, name: string) => {
    dispatch(renameCounter({ id, name }));
  };

  const handleClickCounter = (id: string) => {
    setActiveCounter(id);
  };

  React.useEffect(() => {
    setActiveCounter(id);
  }, [id]);

  return (
    <div className={css.wrapper}>
      {counters.map((counter) => (
        <CounterItem
          key={counter.id}
          id={counter.id}
          name={counter.name}
          onDeleteCounter={handleDeleteCounter}
          onRenameCounter={handleRenameCounter}
          onClickCounter={handleClickCounter}
          isActive={counter.id === activeCounter}
        />
      ))}
    </div>
  );
};

export default CounterList;
