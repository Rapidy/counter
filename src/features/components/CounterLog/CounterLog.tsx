import React from 'react';

import css from './CounterLog.module.scss';

import { Logs } from '../../../app/types';

import CounterLogItem from './CounterLogItem/CounterLogItem';

interface Props {
  logs: Logs[];
}

const CounterLog: React.FC<Props> = ({ logs }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'auto' });
  }, [logs]);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {logs.map((logArray) => (
          <div key={logArray.date.toLocaleDateString()}>
            <div className={css.isDate}>
              <span>{logArray.date.toLocaleDateString()}</span>
            </div>

            {logArray.messages.map((log, index) => (
              <CounterLogItem
                user={log.user}
                type={log.type}
                amount={log.amount}
                subject={log.subject}
                date={log.date}
                key={`${log.type}_${index}`}
              />
            ))}
          </div>
        ))}
        <div ref={ref} />
      </div>
    </div>
  );
};

export default CounterLog;
