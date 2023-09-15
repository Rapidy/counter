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

  const createDateElement = (date: Date) => {
    if (new Date().toLocaleDateString() === date.toLocaleDateString()) {
      return (
        <div className={css.isDate}>
          <span>{date.toLocaleDateString()}</span>
        </div>
      );
    }
    return null;
  };

  const reversedLogs = [...logs].reverse();

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {reversedLogs.map((log) => {
          const dateElement = createDateElement(log.date);

          return (
            <div key={`${log.user?.id}_${log.date.toJSON()}`}>
              {dateElement}
              <CounterLogItem
                user={log.user}
                type={log.type}
                amount={log.amount}
                subject={log.subject}
                date={log.date}
              />
            </div>
          );
        })}
        <div ref={ref} />
      </div>
    </div>
  );
};

export default CounterLog;
