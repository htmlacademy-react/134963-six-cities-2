import { OfferType } from '../../types/offer';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type FavoriteCardProps = {
    offer:OfferType;
};


function FavoriteCard({ offer }: FavoriteCardProps): JSX.Element {
  const { title, type, price, city, location, isFavorite, isPremium, rating, previewImage } = offer;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'Add to bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating || 0) / 5 * 100 }%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}> {title} </Link>
        </h2>
        <p className="place-card__type">{type}</p>
        <p className="place-card__location">{city.name}</p>
        <p className="place-card__coordinates">{location.latitude}, {location.longitude}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
