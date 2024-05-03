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
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../redux/api-actions/api-actions';
import Spinner from '../spinner/spinner';

type TAppProps = {
  offers: FullOffer[];
  reviews: Review[];
}

function App({offers, reviews}: TAppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <HelmetProvider>
      <RouterProvider router={createBrowserRouter([
        {
          path: AppRoute.Main,
          element: <MainPage />
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
