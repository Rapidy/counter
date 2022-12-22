import React from 'react';
import { Counter } from './features/components/counter/Counter';
import css from './App.module.scss';

function App() {
  return (
    <div className={css.root}>
      <header className={css.header}>
        <Counter />
      </header>
    </div>
  );
}

export default App;
