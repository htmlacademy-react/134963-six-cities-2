import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Cities from '../../components/cities/cities';
import MainEmpty from '../../components/main-empty/main-empty';
import { FullOffer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity, setOffers } from '../../redux/action/action';

type TMainPageProps = {
  offers: FullOffer[];
}


function MainPage ({offers}: TMainPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);
  const selectedOffers = useAppSelector((state) => state.offers);

  const handleCityClick = (city: string) => {
    dispatch(setCity(city));
    dispatch(setOffers(offers));
  };

  return (
    <div className={`page__main page__main--index ${selectedOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
      <Helmet>{'6 cities - Main'}</Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations activeCity={activeCity} onCityClick={handleCityClick} />
        </div>
        <div className="cities">
          {selectedOffers.length === 0 ? <MainEmpty /> : <Cities selectedOffers={selectedOffers} activeCity={activeCity} />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;

