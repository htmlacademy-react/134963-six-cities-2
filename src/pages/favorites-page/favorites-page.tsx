import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item.tsx';
import Footer from '../../components/footer/footer.tsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { selectFavoriteOffers } from '../../redux/slices/favorites/favorite-slice.ts';


function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const hasFavorites = favoriteOffers.length > 0;
  const cities = Array.from(
    new Set(favoriteOffers.map((offer) => offer.city.name))
  );

  return (
    <div className="page">
      <Helmet>{'6 cities - Favorites'}</Helmet>
      <Header showNavigation />
      {hasFavorites ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => (
                  <LocationItem key={city} city={city} offers={favoriteOffers} />
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
