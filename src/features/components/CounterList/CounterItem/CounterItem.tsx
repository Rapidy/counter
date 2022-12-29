import React from 'react';
import { Counter } from "../../../../app/types";

interface Props {
    onDeleteCounter: (counterId: string) => void;
    onUpdateNameCounter: (counterId: string, name: string) => void;
}

const CounterItem: React.FC<Props & Counter> = ({
    id,
    name,
    totalAmount,
    users,
    onDeleteCounter,
    onUpdateNameCounter,
}) => {
    return <div>
        <div>{name} : {totalAmount}</div>
        <button onClick={()=> onDeleteCounter(id)}>Удалить</button>
        <button onClick={()=> onUpdateNameCounter(id, name)}>Изменить название</button>
    </div>;
}

export default CounterItem;