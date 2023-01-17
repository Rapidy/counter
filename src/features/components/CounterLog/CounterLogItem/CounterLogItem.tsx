import React from 'react';
import cn from 'classnames';
import css from './CounterLogItem.module.scss';
import { Log, logType } from '../../../../app/types';
import { getRandomColor, timeFormatting } from '../../../../app/utils';

const CounterLogItem: React.FC<Log> = ({ user, type, amount, subject, date }) => {
  const [text] = React.useState<string>(() => {
    switch (type) {
      case logType.AddAmount:
        return `Прибавил +${amount}`;

      case logType.SubstrAmount:
        return `Отнял -${amount}`;

      case logType.createInvitation:
        return `Создал приглашение`;

      case logType.Accept:
        return `Принял приглашение`;

      case logType.Kick:
        return `Удалил пользователя ${subject?.name}`;

      case logType.SetGoal:
        return `Установил цель`;

      case logType.ReachGoal:
        return `Вы достигли цели`;

      case logType.RemoveGoal:
        return `Удалил цель`;

      default:
        return '';
    }
  });

  const classType = {
    [css.content_green]: type === logType.AddAmount,
    [css.content_red]: type === logType.SubstrAmount
  };

  const isMine: boolean = user?.id === '3';
  const noAvatarBackground = getRandomColor();

  const classPosition = {
    [css.log_right]: isMine,
    [css.log_center]: type === logType.ReachGoal
  };

  return (
    <div className={cn(css.log, classPosition)}>
      <div className={css.wrapper}>
        {!isMine && type !== logType.ReachGoal && (
          <div>
            {!!user?.avatarUrl ? (
              <img className={css.avatar} src={user?.avatarUrl} alt={user?.name} />
            ) : (
              <span
                className={cn(css.avatar, css.noAvatar)}
                style={{ background: noAvatarBackground }}
              >
                {user?.name.slice(0, 1)}
              </span>
            )}
          </div>
        )}
        <div className={cn(css.content, classType)}>
          {!isMine && type !== logType.ReachGoal && <div className={css.username}>{user?.name}</div>}
          {text}
          <div className={css.date}>
            <span className={css.time}>{timeFormatting(date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterLogItem;
