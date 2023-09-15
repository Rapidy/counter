import React from 'react';
import cn from 'classnames';
import css from './CounterLogItem.module.scss';
import { Log, LogTypeEnum } from '../../../../app/types';
import { formatTime, getRandomColor } from '../../../../app/utils';

const CounterLogItem: React.FC<Log> = ({ user, type, amount, subject, date }) => {
  const logText = React.useMemo(() => {
    switch (type) {
      case LogTypeEnum.AddAmount:
        return `Прибавил +${amount}`;

      case LogTypeEnum.SubstrAmount:
        return `Отнял -${amount}`;

      case LogTypeEnum.CreateInvitation:
        return `Создал приглашение`;

      case LogTypeEnum.Accept:
        return `Принял приглашение`;

      case LogTypeEnum.Kick:
        return `Удалил пользователя ${subject?.name}`;

      case LogTypeEnum.SetGoal:
        return `Установил цель`;

      case LogTypeEnum.ReachGoal:
        return `Вы достигли цели`;

      case LogTypeEnum.RemoveGoal:
        return `Удалил цель`;

      default:
        return '';
    }
  }, [type, amount, subject]);

  const typeClasses = {
    [css.content_green]: type === LogTypeEnum.AddAmount,
    [css.content_red]: type === LogTypeEnum.SubstrAmount
  };

  const isMine = user?.id === '3';
  const noAvatarBackground = getRandomColor();

  const positionClasses = {
    [css.log_right]: isMine,
    [css.log_center]: type === LogTypeEnum.ReachGoal
  };

  return (
    <div className={cn(css.log, positionClasses)}>
      <div className={css.wrapper}>
        {!isMine && type !== LogTypeEnum.ReachGoal && (
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
        <div className={cn(css.content, typeClasses)}>
          {!isMine && type !== LogTypeEnum.ReachGoal && (
            <div className={css.username}>{user?.name}</div>
          )}
          {logText}
          <div className={css.date}>
            <span className={css.time}>{formatTime(date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterLogItem;
