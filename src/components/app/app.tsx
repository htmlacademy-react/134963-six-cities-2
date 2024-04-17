import { AppRoute, AuthorizationStatus } from '../../const';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { FullOffer } from '../../types/offer';
import { Review } from '../../types/reviews';

type TAppProps = {
  offers: FullOffer[];
  reviews: Review[];
}

function App({offers, reviews}: TAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <RouterProvider router={createBrowserRouter([
        {
          path: AppRoute.Main,
          element: <MainPage offers = {offers}/>
        },
        {
          path: AppRoute.Favorites,
          element: <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} ><FavoritesPage offers = {offers}/></PrivateRoute>,
        },
        {
          path: AppRoute.Login,
          element: <LoginPage />,
        },
        {
          path: `${AppRoute.Offer}/:id`,
          element: <OfferPage offers = {offers} reviews={reviews} />,
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
