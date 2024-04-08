import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { OfferType } from '../../types/offer';
import LocationItem from '../../components/location-item/location-item.tsx';
import Footer from '../../components/footer/footer.tsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';

type FavoritesPageProps = {
  offers: OfferType[];
};

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const hasFavorites = favoriteOffers.length > 0;
  const cities = Array.from(
    new Set(favoriteOffers.map((offer) => offer.city.name))
  );

  return (
    <div className="page">
      <Helmet>{'6 cities - Favorites'}</Helmet>
      <Header />
      {hasFavorites ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => (
                  <LocationItem key={city} city={city} offers={offers} />
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <FavoritesEmpty />
      )}
      <Footer />
    </div>
  );
}

export default FavoritesPage;
