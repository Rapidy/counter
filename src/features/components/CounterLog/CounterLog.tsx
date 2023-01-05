import React from 'react';
import css from './CounterLog.module.scss';
import { Log } from '../../../app/types';

import CounterLogItem from './CounterLogItem/CounterLogItem';

interface Props {
  logs: Log[]
}

const CounterLog: React.FC<Props> = ({ logs }) => {
  return <div>
    {logs.map((log) => (
      <CounterLogItem
        key={`${log.username}_${log.date}`}
        username={log.username}
        type={log.type}
        description={log.description}
        date={log.date}
      />
    ))}
  </div>;
};

export default CounterLog;