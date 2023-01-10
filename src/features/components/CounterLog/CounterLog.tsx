import React from 'react';
import css from './CounterLog.module.scss';
import { Log } from '../../../app/types';

import CounterLogItem from './CounterLogItem/CounterLogItem';

interface Props {
  logs: Log[];
}

const CounterLog: React.FC<Props> = ({ logs }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'auto' });
  }, [logs]);

  let isDate = '';

  const createDateElement = (date: Date) => {
    if (isDate === '' || isDate !== date.toLocaleDateString()) {
      isDate = date.toLocaleDateString();
      return (
        <div className={css.isDate}>
          <span>{date.toLocaleDateString()}</span>
        </div>
      );
    }
    return null;
  };

  const logsReverse = [...logs].reverse();

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {logsReverse.map((log) => {
          const element = createDateElement(log.date);
          return (
            <CounterLogItem
              key={`${log.user.id}_${log.date.toJSON()}`}
              user={log.user}
              type={log.type}
              amount={log.amount}
              date={log.date}
            >
              {element}
            </CounterLogItem>
          );
        })}
        <div ref={ref} />
      </div>
    </div>
  );
};

export default CounterLog;