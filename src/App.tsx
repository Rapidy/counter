import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.scss';

import { Counter } from './features/components/counter/Counter';

function App() {
  return (
    <div className={css.root}>
      <header className={css.header}>
        <Routes location="/">
          <Route index element={<Counter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
