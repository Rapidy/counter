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

  const updateNameCounter = (counterId: string, name: string) => {
    console.log('updateNameCounter', {counterId, name});
  };

  const inviteUserCounter = (counterId: string, inviteUserId: string) => {
    console.log('inviteUserCounter', {counterId, inviteUserId});
  };


  return (
    <div>
      {counters.map((counter) => (
        <CounterItem
          key={counter.index}
          id={counter.id}
          name={counter.name}
          totalAmount={counter.totalAmount}
          users={counter.users}
          onDeleteCounter={handleDeleteCounter}
          onUpdateNameCounter={updateNameCounter}
          inviteUserCounter={inviteUserCounter}
        />
      ))}
    </div>
  );
}

export default CounterList;