import React from 'react';
import css from './UserList.module.scss';

import { User } from '../../../app/types';
import { getRandomColor } from '../../../app/utils';
import { useAppDispatch } from '../../../app/hooks';
import { removeUser } from '../../../app/redux/slices/userSlice';

import UserItem from './UserItem/UserItem';

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  const dispatch = useAppDispatch();

  const authorId = '1';

  const handleDeleteUser = (id: string) => {
    dispatch(removeUser({ id, authorId }));
  };

  const randomAvatarBackground = getRandomColor();
  const sortedUserList = [...users].sort((a, b) => b.totalAmount - a.totalAmount);

  return (
    <div className={css.wrapper}>
      {sortedUserList.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          avatarUrl={user.avatarUrl}
          totalAmount={user.totalAmount}
          onDeleteUser={handleDeleteUser}
          noAvatarBackground={randomAvatarBackground}
          isOwner={authorId === user.id}
        />
      ))}
    </div>
  );
};

export default UserList;
