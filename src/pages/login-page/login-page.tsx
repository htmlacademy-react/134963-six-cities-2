// LoginPage.tsx
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginSection from '../../components/login-section/login-section';

function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <Helmet>{'6 cities - Login'}</Helmet>
      <Header showNavigation={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginSection />
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
