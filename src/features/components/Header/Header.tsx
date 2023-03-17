import React from 'react';
import css from './Header.module.scss';
import { Goal } from '../../../app/types';

import GoalComponent from './Goal/Goal';

interface Props {
  title?: string;
  goal?: Goal;
}

const Header: React.FC<Props> = ({ title, goal }) => {
  return (
    <header className={css.wrapper}>
      <h2 className={css.title}>{title}</h2>
      <div>
        {goal && (
          <GoalComponent
            currentAmount={goal.currentAmount}
            goalAmount={goal.goalAmount}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
