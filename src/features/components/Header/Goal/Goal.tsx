import React from 'react';
import css from './Goal.module.scss';
import cn from 'classnames';

import { formatAmount } from '../../../../app/utils';

interface Props {
  title?: string;
  goalAmount: number;
  currentAmount: number;
}

const Goal: React.FC<Props> = ({ title = 'Цель', goalAmount, currentAmount }) => {
  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>{title}</h4>
      <p className={css.amount}>
        <span
          className={cn(css.amount_current, {
            [css.amount_current_reached]: currentAmount >= goalAmount
          })}
        >
          {formatAmount(currentAmount)}
        </span>{' '}
        / <span className={css.amount_goal}>{formatAmount(goalAmount)}</span>
      </p>
    </div>
  );
};

export default Goal;
