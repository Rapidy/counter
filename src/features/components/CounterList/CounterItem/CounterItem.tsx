import React, { useState } from 'react';
import css from './CounterItem.module.scss';
import cn from 'classnames';
import { Counter } from '../../../../app/types';

import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  isActive: boolean;
  onDeleteCounter: (id: string) => void;
  onRenameCounter: (id: string, name: string) => void;
  onClickCounter: (id: string) => void;
}

const CounterItem: React.FC<Props & Counter> = ({
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
      to={id}
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
          required
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
        <button className={css.button} onClick={() => setEditing(true)}>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className={css.button} onClick={() => onDeleteCounter(id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </NavLink>
  );
};

export default CounterItem;
