import React from 'react';
import css from './Header.module.scss';
import { Goal, Notification } from '../../../app/types';

import GoalComponent from './Goal/Goal';
import NotificationComponent from './Notification/Notification';
import { useAppDispatch } from '../../../app/hooks';
import { viewNotification } from '../../../app/redux/slices/notificationSlice';

interface Props {
  title?: string;
  goal?: Goal;
  notifications?: Notification[];
}

const Header: React.FC<Props> = ({ title, goal, notifications }) => {
  const [newNotificationsAmount, setNewNotificationsAmount] = React.useState<number>(0);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setNewNotificationsAmount(
      notifications?.length
        ? notifications.filter((notification) => !notification.isViewed).length
        : 0
    );
  }, [notifications]);

  const onViewNotification = (id: string) => {
    dispatch(viewNotification(id));
  };

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
            onView={onViewNotification}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
