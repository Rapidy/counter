import React from 'react';
import { User } from '../../../app/types';
import UserItem from './UserItem/UserItem';
import { getRandomColor } from '../../../app/utils';

interface Props {
  users: User[];
  listName: string;
}

const UserList: React.FC<Props> = ({ users, listName }) => {
  const handleDeleteUser = (id: string) => {
    console.log(id);
  };

  const randomAvatarBackground = getRandomColor();

  const sortedUserList = users.sort((a, b) => b.totalAmount - a.totalAmount);

  return (
    <div>
      <h3>{listName}</h3>
      {sortedUserList.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          avatarUrl={user.avatarUrl}
          totalAmount={user.totalAmount}
          onDeleteUser={handleDeleteUser}
          noAvatarBackground={randomAvatarBackground}
        />
      ))}
    </div>
  );
};

export default UserList;
