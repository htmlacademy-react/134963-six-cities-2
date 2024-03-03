import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import { City, Offer } from '../../types/offer';
import Cities from '../../components/cities/cities';

type MainPageProps = {
    // offerCount: number;
    offers: Offer[];
}

function MainPage ({offers}: MainPageProps): JSX.Element {

  const cities: City[] = offers.map((offer) => offer.city);
  return (
    <div className="page page--gray page--main">
      <Helmet>{'6 cities - Main'}</Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <Cities />
        </div>
      </main>
    </div>
  );
}

export default MainPage;

