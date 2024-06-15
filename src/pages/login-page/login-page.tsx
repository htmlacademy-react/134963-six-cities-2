import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginSection from '../../components/login-section/login-section';
import { AppRoute, LOCATIONS } from '../../const';
import { Link } from 'react-router-dom';
import { getRandomLocation } from '../../utils/utils';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../redux/slices/ui/ui';

function LoginPage() {
  const dispatch = useAppDispatch();
  const randomLocation = getRandomLocation(LOCATIONS);
  return (
    <div className="page page--gray page--login">
      <Helmet>{'6 cities - Login'}</Helmet>
      <Header showNavigation={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginSection />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Main} className="locations__item-link" onClick={() => dispatch(setCity(randomLocation))}>
                <span>{randomLocation}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
