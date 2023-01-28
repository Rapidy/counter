import React from 'react';
import css from './PopUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Props {
  children: React.ReactNode;
  isActive: boolean;
  toggle: () => void;
  title?: string;
}

const PopUp: React.FC<Props> = ({ children, isActive, toggle, title }) => {
  return (
    <>
      {isActive && (
        <div className={css.popup}>
          <div className={css.container}>
            <div className={css.box}>
              <button type="button" className={css.close} onClick={toggle}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              {title && (
                <div className={css.header}>
                  <h3 className={css.title}>{title}</h3>
                </div>
              )}
              <div className={css.content}>{children}</div>
            </div>
          </div>
          <div className={css.overlay} onClick={toggle} />
        </div>
      )}
    </>
  );
};

export default PopUp;
