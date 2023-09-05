import React from 'react';
import css from './Header.module.scss';
import { Goal, Notification } from '../../../app/types';

import GoalComponent from './Goal/Goal';
import NotificationComponent from './Notification/Notification';

interface Props {
  title?: string;
  goal?: Goal;
  notifications?: Notification[];
}

const Header: React.FC<Props> = ({ title, goal, notifications }) => {
  const [newNotificationsAmount, setNewNotificationsAmount] = React.useState<number>(0);

  React.useEffect(() => {
    setNewNotificationsAmount(
      notifications?.length
        ? notifications.filter((notification) => !notification.isViewed).length
        : 0
    );
  }, [notifications]);

  return (
    <header className={css.wrapper}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.panel}>
        {goal && (
          <GoalComponent
            currentAmount={goal.currentAmount}
            goalAmount={goal.goalAmount}
          />
        )}

        <div className={css.menu}>
          <NotificationComponent
            newAmount={newNotificationsAmount}
            notifications={notifications}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
