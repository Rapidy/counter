import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import css from './Notification.module.scss';

import {
  Notification as NotificationType,
  NotificationTypeEnum
} from '../../../../app/types';

import Button from '../../../elements/Button/Button';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Popover } from '@mui/material';
import cn from 'classnames';

interface Props {
  newAmount: number;
  notifications?: NotificationType[];
  onView: () => void;
  onClear: () => void;
}

const Notification: React.FC<Props> = ({ newAmount, notifications, onView, onClear }) => {
  const [isOpened, setOpened] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const onOpen = () => {
    setOpened(true);
  };

  const onClose = () => {
    setOpened(false);
    onView();
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
        {notifications?.length ? (
          <>
            <div className={cn(css.popover__header)}>
              <Button
                className={cn(css.popover__clear)}
                onClick={onClear}
                type="secondary"
              >
                Очистить уведомления
              </Button>
            </div>

            <div className={cn(css.popover__content)}>
              {notifications?.map((notification) => (
                <div
                  className={cn(css.popover__item, {
                    [css.popover__item_invitation]:
                      notification.type === NotificationTypeEnum.Invitation,
                    [css.popover__item_kick]:
                      notification.type === NotificationTypeEnum.Kick,
                    [css.popover__item_system]:
                      notification.type === NotificationTypeEnum.SystemInformation,
                    [css.popover__item_goal]:
                      notification.type === NotificationTypeEnum.ReachGoal,
                    [css.popover__item_isViewed]: notification.isViewed
                  })}
                  key={notification.id}
                >
                  <h4 className={cn(css.item__title)}>{notification.title}</h4>
                  <p className={cn(css.item__description)}>{notification.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={cn(css.popover__content)}>
            <span className={cn(css.popover__error)}>Уведомлений нет</span>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default Notification;
