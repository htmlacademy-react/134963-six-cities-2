import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Cities from '../../components/cities/cities';
import MainEmpty from '../../components/main-empty/main-empty';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../redux/slices/ui/ui';
import { selectOffers, selectOffersFetchStatus } from '../../redux/slices/offers/offersSlice';
import { selectCity } from '../../redux/slices/ui/ui';
import clsx from 'clsx';
import Spinner from '../../components/spinner/spinner';
import NotFoundPage from '../not-found-page/not-found-page';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectOffersFetchStatus);
  const activeCity = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);

  const filterOffers = offers.filter((offer) => offer.city.name === activeCity);

  const handleCityClick = (city: string) => {
    dispatch(setCity(city));
  };

  if (status.isLoading) {
    return <Spinner />;
  }

  if (status.isError) {
    return <NotFoundPage />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>{'6 cities - Main'}</Helmet>
      <Header showNavigation />

      <main
        className={clsx(
          'page__main',
          'page__main--index',
          filterOffers.length === 0 && 'page__main--index-empty'
        )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations activeCity={activeCity} onCityClick={handleCityClick} />
        </div>
        <div className="cities">
          {filterOffers.length === 0 ? (
            <MainEmpty />
          ) : (
            <Cities selectedOffers={filterOffers} activeCity={activeCity} />
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
