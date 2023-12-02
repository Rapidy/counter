import React from 'react';

import css from './UserList.module.scss';

import { useAppDispatch } from '../../../app/hooks';
import { removeUser } from '../../../app/redux/slices/userSlice';
import { User } from '../../../app/types';

import UserItem from './UserItem/UserItem';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  const dispatch = useAppDispatch();
  const [requestName, setRequestName] = React.useState<string | null>('');

  const authorId = '1';

  const handleDeleteUser = (id: string) => {
    dispatch(removeUser({ id, authorId }));
  };

  const userList = requestName
    ? users.filter((user) => user.name === requestName)
    : users;

  return (
    <div className={css.wrapper}>
      <Autocomplete
        id="usersSearch"
        freeSolo={true}
        onChange={(_, value) => setRequestName(value)}
        value={requestName}
        options={users.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Поиск"
            InputLabelProps={{
              ...params.InputLabelProps,
              classes: { root: css.label, focused: css.label_focused }
            }}
            InputProps={{
              ...params.InputProps,
              classes: { root: css.input, focused: css.input_focused }
            }}
            variant="filled"
          />
        )}
      />

      {userList.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          avatarUrl={user.avatarUrl}
          totalAmount={user.totalAmount}
          onDeleteUser={handleDeleteUser}
          isOwner={authorId === user.id}
        />
      ))}
    </div>
  );
};

export default UserList;
