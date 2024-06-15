import { AppRoute, AuthorizationStatus } from './const';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import MainPage from './pages/main-page/main-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import LoginPage from './pages/login-page/login-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import PrivateRoute from './components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
