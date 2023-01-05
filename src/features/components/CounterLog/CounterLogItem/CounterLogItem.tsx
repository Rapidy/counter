import React from 'react';
import css from './CounterLogItem.module.scss';
import { Log } from '../../../../app/types';

const CounterLogItem: React.FC<Log> = ({
  username,
  type,
  description,
  date
}) => {
  let text: string = '';

  switch (type) {
    case 1:
      text = `+ ${description}`;
      break;
    case 2:
      text = `- ${description}`;
      break;
    default:
      text = description;
      break;
  }

  return <div>[{username}]: {text} - {date}</div>;
};

export default CounterLogItem;