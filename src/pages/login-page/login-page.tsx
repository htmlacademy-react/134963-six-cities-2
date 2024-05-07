import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import toast from 'react-hot-toast';
import { FormEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute, emailRegex, passwordRegex } from '../../const';
import { loginAction } from '../../redux/api-actions/api-actions';


function LoginPage() {
  const [isFormValid, setIsFormValid] = useState(false);
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showToast = (message: string) => {
    toast(message);
  };

  const handleInputChange = () => {
    if (loginRef.current && passwordRef.current) {
      const email = loginRef.current.value;
      const password = passwordRef.current.value;

      const isValidEmail = emailRegex.test(email);
      const isValidPassword = passwordRegex.test(password);

      setIsFormValid(isValidEmail && isValidPassword);

      if (!isValidEmail) {
        showToast('Пожалуйста, введите действительный адрес электронной почты');
      }

      if (!isValidPassword) {
        showToast('Пароль должен содержать хотя бы одну букву и одну цифру');
      }
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {

      dispatch(
        loginAction({
          email: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
      navigate(AppRoute.Main);
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>{'6 cities - Login'}</Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
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
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
