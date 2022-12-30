import React from 'react';
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
    return <div>
        <div>{name}</div>
        <button onClick={()=> onDeleteCounter(id)}>Удалить</button>
        <button onClick={()=> onRenameCounter(id, name)}>Изменить название</button>
    </div>;
}

export default CounterItem;