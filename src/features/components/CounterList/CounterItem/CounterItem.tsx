import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import css from './CounterItem.module.scss';

import { CounterListItem } from '../../../../app/types';

import Button from '../../../elements/Button/Button';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

interface Props {
  isActive: boolean;
  onDeleteCounter: (id: string) => void;
  onRenameCounter: (id: string, name: string) => void;
  onClickCounter: (id: string) => void;
}

const CounterItem: React.FC<Props & CounterListItem> = ({
  id,
  name,
  isActive,
  onDeleteCounter,
  onRenameCounter,
  onClickCounter
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const onRename = () => {
    setEditing(false);
    if (newName.trim().length) {
      if (newName !== name) {
        onRenameCounter(id, newName);
      }
    } else {
      setNewName(name);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onRename();
    }
  };

  return (
    <NavLink
      to={`counter/${id}`}
      className={cn(css.wrapper, { [css.active]: isActive })}
      onClick={() => onClickCounter(id)}
    >
      {isEditing ? (
        <input
          type="text"
          value={newName}
          className={css.renameInput}
          onChange={onChange}
          autoFocus={true}
          onKeyDown={onKeyDown}
          onBlur={onRename}
          required={true}
        />
      ) : (
        <p className={css.name}>{name}</p>
      )}
      <div
        className={css.controls}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Button
          className={css.button}
          onClick={() => setEditing(true)}
          controlIcon={faPen}
          type="control"
        />
        <Button
          className={css.button}
          onClick={() => onDeleteCounter(id)}
          controlIcon={faTrashCan}
          type="control"
        />
      </div>
    </NavLink>
  );
};

export default CounterItem;
