import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Cities from '../../components/cities/cities';
import { useSelector } from 'react-redux';
import MainEmpty from '../../components/main-empty/main-empty';
import { FullOffer } from '../../types/offer';

type RootState = {
  offers: FullOffer[];
}


function MainPage (): JSX.Element {
  const offers = useSelector((state: RootState) => state.offers);

  return (
    <div className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
      <Helmet>{'6 cities - Main'}</Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          {offers.length === 0 ? <MainEmpty /> : <Cities />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;

