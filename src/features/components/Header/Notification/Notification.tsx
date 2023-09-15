import React from 'react';
import css from './Notification.module.scss';
import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  Notification as NotificationType,
  NotificationTypeEnum
} from '../../../../app/types';
import { Popover } from '@mui/material';

interface Props {
  newAmount: number;
  notifications?: NotificationType[];
  onView: (id: string) => void;
}

const Notification: React.FC<Props> = ({ newAmount, notifications, onView }) => {
  const [isOpened, setOpened] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const onOpen = () => {
    setOpened(true);
  };

  const onClose = () => {
    setOpened(false);
  };

  return (
    <div className={css.wrapper} ref={ref}>
      <button className={css.button} onClick={onOpen}>
        <FontAwesomeIcon
          className={cn(css.icon, { [css.new]: !!newAmount })}
          icon={faBell as IconProp}
        />
        {!!newAmount && <span className={css.counter}>{newAmount}</span>}
      </button>

      <Popover
        classes={{ root: cn(css.popover) }}
        open={isOpened}
        anchorEl={ref.current}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <div className={cn(css.popover__content)}>
          {notifications?.map((notification) => (
            <div
              className={cn(css.popover__item, {
                [css.popover__item_invitation]:
                  notification.type === NotificationTypeEnum.Invitation,
                [css.popover__item_kick]: notification.type === NotificationTypeEnum.Kick,
                [css.popover__item_system]:
                  notification.type === NotificationTypeEnum.SystemInformation,
                [css.popover__item_goal]:
                  notification.type === NotificationTypeEnum.ReachGoal,
                [css.popover__item_isViewed]: notification.isViewed
              })}
              key={notification.id}
              onClick={() => onView(notification.id)}
            >
              {notification.title}: {notification.description}
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default Notification;
