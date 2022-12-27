import React from 'react';
import { User } from '../../../../app/types';
import css from './UserItem.module.scss';
import cn from 'classnames';

interface Props {
  noAvatarBackground: string;
  onDeleteUser: (id: string) => void;
}

const UserItem: React.FC<Props & User> = ({
  name,
  id,
  avatarUrl,
  totalAmount,
  noAvatarBackground,
  onDeleteUser
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.info}>
        {!!avatarUrl ? (
          <img className={css.avatar} src={avatarUrl} alt={name} />
        ) : (
          <div
            className={cn(css.avatar, css.noAvatar)}
            style={{ background: noAvatarBackground }}
          >
            {name.slice(0, 1)}
          </div>
        )}

        <span className={css.name}>{name}</span>
        <p className={css.totalAmount}>({totalAmount})</p>
      </div>
      <button className={css.deleteButton} onClick={() => onDeleteUser(id)}>
        X
      </button>
    </div>
  );
};

export default UserItem;
