import React from 'react';
import { Counter } from '../../../app/types';
import { useAppDispatch } from '../../../app/hooks';
import { removeCounter, renameCounter } from '../../../app/redux/slices/counterSlice';

import CounterItem from './CounterItem/CounterItem';

interface Props {
    counters: Counter[];
}

const CounterList: React.FC<Props> = ({ counters }) => {
  const dispatch = useAppDispatch();

  const handleDeleteCounter = (counterId: string) => {
    dispatch(removeCounter(counterId));
  };

  const handleRenameCounter = (id: string, name: string) => {
    dispatch(renameCounter({id, name}));
  };

  return (
    <div>
      {counters.map((counter) => (
        <CounterItem
          key={counter.id}
          id={counter.id}
          name={counter.name}
          onDeleteCounter={handleDeleteCounter}
          onRenameCounter={handleRenameCounter}
        />
      ))}
    </div>
  );
}

export default CounterList;