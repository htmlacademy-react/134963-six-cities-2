import { AppRoute, AuthorizationStatus } from '../../const';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { FullOffer } from '../../types/offer';
import { Review } from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import { Routes, Route } from 'react-router-dom';

type TAppProps = {
  offers: FullOffer[];
  reviews: Review[];
};

function App({ offers, reviews }: TAppProps): JSX.Element {
  const { isLoading, error } = useAppSelector((state) => state);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage offers={offers} reviews={reviews} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
