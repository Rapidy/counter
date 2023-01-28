import React from 'react';
import css from './Button.module.scss';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  onClick: () => any;
  className?: string;
  color?: 'secondary' | 'primary';
}

const Button: React.FC<Props> = ({ children, className, onClick, color = 'primary' }) => {
  return (
    <button
      className={cn(css.button, className, {
        [css.secondary]: color === 'secondary'
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
