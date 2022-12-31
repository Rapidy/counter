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
  const [rename, setRename] = useState(false);
  const [newName, setNewName] = useState(name);

  const onRename = () => {
    setRename(false);
    if(newName !== name) {
      onRenameCounter(id, newName);
    }
  }

  return <div>
    <div>
      {rename
        ? <input type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            autoFocus={true}
            onKeyDown={(e) => e.keyCode === 13 && onRename()}
            onBlur={onRename}
          />
        : name
      }
    </div>
    <button onClick={()=> onDeleteCounter(id)}>Удалить</button>
    <button onClick={() => setRename(true)}>Изменить название</button>
  </div>;
}

export default CounterItem;