import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import css from './Button.module.scss';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

interface Props {
  children?: React.ReactNode;
  onClick: () => any;
  className?: string;
  type?: 'secondary' | 'primary' | 'control';
  controlIcon?: IconProp;
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  type = 'primary',
  controlIcon = faTrashCan
}) => {
  return (
    <button
      className={cn(css.button, className, {
        [css.secondary]: type === 'secondary',
        [css.control]: type === 'control'
      })}
      onClick={onClick}
    >
      {children} {type === 'control' && <FontAwesomeIcon icon={controlIcon} />}
    </button>
  );
};

export default Button;
