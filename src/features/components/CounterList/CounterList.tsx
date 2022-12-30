import React from 'react';
import { Counter } from '../../../app/types';
import CounterItem from './CounterItem/CounterItem';

interface Props {
    counters: Counter[];
}

const CounterList: React.FC<Props> = ({ counters }) => {

  const handleDeleteCounter = (counterId: string) => {
    console.log('handleDeleteCounter', {counterId});
  };

  const handleRenameCounter = (counterId: string, name: string) => {
    console.log('handleRenameCounter', {counterId, name});
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