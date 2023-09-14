import React from 'react';
import css from './Notification.module.scss';
import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Notification as NotificationType } from '../../../../app/types';
import { Popover } from '@mui/material';

interface Props {
  newAmount: number;
  notifications?: NotificationType[];
}

const Notification: React.FC<Props> = ({ newAmount, notifications }) => {
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <div className={cn(css.popover__content)}>
          {notifications?.map((notification) => (
            <div key={notification.id}>
              {notification.title}: {notification.description}
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default Notification;
