import { OfferType } from '../../types/offer';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import CardBookmarkButton from '../card-bookmark-button/card-bookmark-button';
import CardRating from '../card-rating/card-rating';
import { capitalizeFirstLetter } from '../../utils/utils';

type TFavoriteCardProps = {
  offer: OfferType;
};

function FavoriteCard({ offer }: TFavoriteCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    city,
    location,
    isFavorite,
    isPremium,
    rating,
    previewImage,
  } = offer;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
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
          <CardBookmarkButton isFavorite={isFavorite} offerId={id} />
        </div>
        <CardRating rating={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}> {capitalizeFirstLetter(title)} </Link>
        </h2>
        <p className="place-card__type">{type}</p>
        <p className="place-card__location">{city.name}</p>
        <p className="place-card__coordinates">
          {location.latitude}, {location.longitude}
        </p>
      </div>
    </article>
  );
}

export default FavoriteCard;
