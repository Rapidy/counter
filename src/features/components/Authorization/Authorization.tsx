import React from 'react';

import css from './Authorization.module.scss';

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'Укажите имя не менее 6 букв')
    .required('Необходимо ввести имя пользователя'),
  email: yup.string().email('Укажите верную почту').required('Необходимо ввести почту'),
  password: yup
    .string()
    .min(8, 'Придумайте пароль минимум 8 символов')
    .required('Необходимо ввести пароль'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Необходимо повторить пароль')
});

const Authorization: React.FC = (props) => {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const initialValues = { username: '', email: '', password: '', repeatPassword: '' };

  const onAuth = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    if (isRegistered) {
      // login
    }

    setSubmitting(false);

    // register
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onAuth}
        validationSchema={RegistrationSchema}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Field
              className={css.form__item}
              id="username"
              name="username"
              placeholder="Введите логин"
            />
            <ErrorMessage name="username" />

            <Field
              className={css.form__item}
              id="email"
              name="email"
              placeholder="Введите почту"
            />
            <ErrorMessage name="email" />

            <Field
              className={css.form__item}
              id="password"
              name="password"
              placeholder="Введите пароль"
            />
            <ErrorMessage name="password" />

            <Field
              className={css.form__item}
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Повторите пароль"
            />
            <ErrorMessage name="repeatPassword" />

            <button type="submit" disabled={isSubmitting}>
              Создать аккаунт
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Authorization;
