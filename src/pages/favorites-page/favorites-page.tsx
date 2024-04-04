import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { OfferType } from '../../types/offer';
import LocationItem from '../../components/location-item/location-item.tsx';


type FavoritesPageProps = {
  offers: OfferType[];
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const cities = [...new Set(offers.map((offer) => offer.city.name))];
  const hasFavorites = offers.some((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Helmet>{'6 cities - Favorites'}</Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {hasFavorites ? (
              <ul className="favorites__list">
                {cities.map((city) => (
                  <LocationItem key={city} city={city} offers={offers} />
                ))}
              </ul>
            ) : (
              <p>No favorite offers yet. Add some favorites!</p>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
