import React from 'react';
import cn from 'classnames';
import css from './CounterLogItem.module.scss';
import { Log, logType } from '../../../../app/types';
import { timeFormatting, getRandomColor } from '../../../../app/utils';

interface Props {
  children?: React.ReactNode;
}

const CounterLogItem: React.FC<Props & Log> = ({
  user,
  type,
  amount,
  date,
  children
}) => {
  let text: string = '';

  switch (type) {
    case logType.AddAmount:
      text = `Lorem ipsum dolor sit amet consectetur adipisicing. + ${amount}`;
      break;
    case logType.SubstrAmount:
      text = `Lorem ipsum dolor sit amet consectetur adipisicing. - ${amount}`;
      break;
    case logType.Invite:
      text = `Lorem, ipsum dolor.`;
      break;
    case logType.Kick:
      text = 'Lorem, ipsum.';
      break;
  }

  const classType = {
    [css.green]: type === logType.AddAmount,
    [css.red]: type === logType.SubstrAmount
  };

  const myLogs: boolean = user.id === '3';
  const noAvatarBackground = getRandomColor();

  return (
    <>
      {children}
      <div className={cn(css.log, { [css.right]: myLogs })}>
        <div className={css.wrapper}>
          {!myLogs && (
            <div>
              {!!user.avatarUrl ? (
                <img
                  className={css.avatar}
                  src={user.avatarUrl}
                  alt={user.name}
                />
              ) : (
                <span
                  className={cn(css.avatar, css.noAvatar)}
                  style={{ background: noAvatarBackground }}
                >
                  {user.name.slice(0, 1)}
                </span>
              )}
            </div>
          )}
          <div className={cn(css.content, classType)}>
            {!myLogs && <div className={css.username}>{user.name}</div>}
            {text}
            <div className={css.date}>
              <span className={css.time}>{timeFormatting(date)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterLogItem;
