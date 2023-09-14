import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';

type useToggleType = [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>> ];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useToggle = (initialState: boolean = false): useToggleType => {
  const [state, setState] = React.useState(initialState);

  const toggle = () => setState(!state);

  return [state, toggle, setState];
};
