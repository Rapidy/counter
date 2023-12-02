import React from 'react';

import css from './Header.module.scss';

import { useAppDispatch } from '../../../app/hooks';
import {
  clearNotifications,
  viewNotifications
} from '../../../app/redux/slices/notificationSlice';
import { Goal, Notification } from '../../../app/types';

import GoalComponent from './Goal/Goal';
import NotificationComponent from './Notification/Notification';

interface Props {
  title?: string;
  goal?: Goal;
  notifications?: Notification[];
}

const Header: React.FC<Props> = ({ title, goal, notifications }) => {
  const [newNotifications, setNewNotifications] = React.useState<Notification[]>([]);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setNewNotifications(
      notifications?.length
        ? notifications.filter((notification) => !notification.isViewed)
        : []
    );
  }, [notifications]);

  const onViewNotification = () => {
    dispatch(viewNotifications());
  };

  const onClearNotifications = () => {
    dispatch(clearNotifications());
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
            newAmount={newNotifications.length}
            notifications={notifications}
            onView={onViewNotification}
            onClear={onClearNotifications}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
