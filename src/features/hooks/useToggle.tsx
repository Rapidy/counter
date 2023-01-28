import React from 'react';

type HookType = [boolean, (value: boolean) => void, () => void];

const useToggle = (initial: boolean = false): HookType => {
  const [state, setState] = React.useState(initial);

  const toggle = () => setState(!state);

  return [state, setState, toggle];
};

export default useToggle;
