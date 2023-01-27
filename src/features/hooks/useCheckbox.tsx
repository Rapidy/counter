import React from 'react';

type TypeHook = [boolean, (value: boolean) => void, () => void];

const useCheckbox = (initial: boolean = false): TypeHook => {
  const [state, setState] = React.useState(initial);

  const toggle = () => setState(!state);

  return [state, setState, toggle];
};

export default useCheckbox;
