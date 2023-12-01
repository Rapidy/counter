import React from 'react';
import css from './Authorization.module.css';

interface Props {}

const Authorization: React.FC<Props> = (props) => {
  const [isRegistered, setIsRegistered] = React.useState(false);

  const onAuth = () => {
    if (isRegistered) {
      // login
    }

    // register
  };

  return (
    <div className={css.wrapper}>
      <form action="" onSubmit={onAuth}>
        <div className={css.form__item}>
          <label htmlFor="username">Введите ник</label>
          <input type="text" id="username" />
        </div>

        <div className={css.form__item}>
          <label htmlFor="email">Введите почту</label>
        </div>

        <div className={css.form__item}>
          <label htmlFor="password">Введите пароль</label>
        </div>

        <div className={css.form__item}>
          <label htmlFor="repeat_password">Повторите пароль</label>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
