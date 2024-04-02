import { OfferType } from '../../types/offer';
import FavoriteCard from '../favoriteCard/favoriteCard';

type LocationItemProps = {
    offers:OfferType[];
    city: string;
};

function LocationItem ({city, offers }:LocationItemProps) {

  const favoriteOffers = offers.filter((offer) => offer.city.name === city && offer.isFavorite);

  return (
    <li className="favorites__locations-items">
      {favoriteOffers.length > 0 && (
        <>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers.map((offer) => (
              <FavoriteCard key={offer.id} offer={offer} />
            ))}
          </div>
        </>
      )}
    </li>
  );
}

export default LocationItem;

