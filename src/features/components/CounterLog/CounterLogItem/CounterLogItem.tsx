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
  removedUser,
  date,
  children
}) => {
  const [text] = React.useState<string>(() => {
    switch (type) {
      case logType.AddAmount:
        return `Прибавил +${amount}`;

      case logType.SubstrAmount:
        return `Отнял -${amount}`;

      case logType.Invite:
        return `Пригласил пользователя`;

      case logType.Kick:
        return `Удалил пользователя ${removedUser?.name}`;

      default:
        return 'Ошибка, неопределенное действие';
    }
  });

  const classType = {
    [css.content_green]: type === logType.AddAmount,
    [css.content_red]: type === logType.SubstrAmount
  };

  const isMine: boolean = user.id === '3';
  const noAvatarBackground = getRandomColor();

  return (
    <>
      {children}
      <div className={cn(css.log, { [css.log_right]: isMine })}>
        <div className={css.wrapper}>
          {!isMine && (
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
            {!isMine && <div className={css.username}>{user.name}</div>}
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
