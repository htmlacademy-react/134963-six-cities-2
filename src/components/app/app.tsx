import { AppRoute, AuthorizationStatus } from '../../const';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { OfferType } from '../../types/offer';

type AppProps = {
  offers: OfferType[];
}

function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <RouterProvider router={createBrowserRouter([
        {
          path: AppRoute.Main,
          element: <MainPage offers = {offers}/>
        },
        {
          path: AppRoute.Favorites,
          element: <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage /></PrivateRoute>,
        },
        {
          path: AppRoute.Login,
          element: <LoginPage />,
        },
        {
          path: AppRoute.Offer,
          element: <OfferPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        }
      ])}
      >
      </RouterProvider>
    </HelmetProvider>);
}

export default App;
