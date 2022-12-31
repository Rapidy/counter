import React, { useState } from 'react';
import { Counter } from "../../../../app/types";

interface Props {
  onDeleteCounter: (counterId: string) => void;
  onRenameCounter: (counterId: string, name: string) => void;
}

const CounterItem: React.FC<Props & Counter> = ({
  id,
  name,
  onDeleteCounter,
  onRenameCounter,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const onRename = () => {
    setEditing(false);
    if(newName !== name && newName.trim().length !== 0) {
      onRenameCounter(id, newName);
    } else {
      setNewName(name);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onRename();
    }
  }

  return <div>
    <div>
      {isEditing
        ? <input type="text"
            value={newName}
            onChange={onChange}
            autoFocus={true}
            onKeyDown={onKeyDown}
            onBlur={onRename}
            required
          />
        : name
      }
    </div>
    <button onClick={()=> onDeleteCounter(id)}>Удалить</button>
    <button onClick={() => setEditing(true)}>Изменить название</button>
  </div>;
}

export default CounterItem;