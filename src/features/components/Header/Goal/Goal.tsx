import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import css from './Goal.module.scss';

import { formatAmount, getPercentage } from '../../../../app/utils';

import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

interface Props {
  title?: string;
  goalAmount: number;
  currentAmount: number;
}

const Goal: React.FC<Props> = ({ title = 'Цель', goalAmount, currentAmount }) => {
  return (
    <div className={css.wrapper}>
      <div
        className={css.wrapper__progress}
        style={{ height: getPercentage(currentAmount, goalAmount, true) }}
      />

      <h4 className={css.title}>
        {title} <FontAwesomeIcon icon={faTrophy} size="xs" />
      </h4>
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
