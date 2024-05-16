import { FormEvent, useRef, useState } from 'react';
import { emailRegex, passwordRegex } from '../../const';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../redux/api-actions/api-actions';

function LoginSection() {
  const [isFormValid, setIsFormValid] = useState(false);
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleInputChange = () => {
    if (loginRef.current && passwordRef.current) {
      const email = loginRef.current.value;
      const password = passwordRef.current.value;

      const isValidEmail = emailRegex.test(email);
      const isValidPassword = passwordRegex.test(password);

      setIsFormValid(isValidEmail && isValidPassword);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      const login = loginRef.current;
      const password = passwordRef.current;

      dispatch(
        loginAction({
          email: login.value,
          password: password.value,
        })
      );
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={loginRef}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={passwordRef}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleInputChange}
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginSection;
