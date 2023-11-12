import React from 'react';
import { User } from '../../../../app/types';
import css from './UserItem.module.scss';
import cn from 'classnames';

import { formatAmount } from '../../../../app/utils';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../elements/Button/Button';

interface Props {
  noAvatarBackground: string;
  isOwner: boolean;
  onDeleteUser: (id: string) => void;
}

const UserItem: React.FC<Props & User> = ({
  name,
  id,
  isOwner,
  avatarUrl,
  totalAmount,
  noAvatarBackground,
  onDeleteUser
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.info}>
        {!!avatarUrl ? (
          <img className={css.info__avatar} src={avatarUrl} alt={name} />
        ) : (
          <div
            className={cn(css.info__avatar, css.info__avatar_noAvatar)}
            style={{ background: noAvatarBackground }}
          >
            {name.slice(0, 1)}
          </div>
        )}

        <div className={css.info__text}>
          <span className={cn(css.name, { [css.name_owner]: isOwner })}>
            {isOwner && <FontAwesomeIcon icon={faCrown} />} {name}
          </span>
          <p className={css.totalAmount}>{formatAmount(totalAmount)}</p>
        </div>
      </div>

      <Button
        className={css.button_delete}
        onClick={() => onDeleteUser(id)}
        type="control"
      />
    </div>
  );
};

export default UserItem;
