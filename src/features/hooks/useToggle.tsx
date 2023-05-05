import React from 'react';

type HookType = [boolean, () => void, (value: boolean) => void];

const useToggle = (initial: boolean = false): HookType => {
  const [state, setState] = React.useState(initial);

  const toggle = () => setState(!state);

  return [state, toggle, setState];
};

export default useToggle;
