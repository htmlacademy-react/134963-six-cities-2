import { OfferType } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { capitalizeFirstLetter } from '../../utils/utils';
import CardBookmarkButton from '../card-bookmark-button/card-bookmark-button';
import CardRating from '../card-rating/card-rating';

type TCardProps = {
  offer: OfferType;
  block: string;
  onMouseOver?: (id: string | null) => void;
};

function Card({ offer, onMouseOver, block }: TCardProps): JSX.Element {
  const { title, type, price, isFavorite, rating, previewImage } = offer;

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={() => onMouseOver && onMouseOver(offer.id)}
      onMouseLeave={() => onMouseOver && onMouseOver(null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <CardBookmarkButton isFavorite={isFavorite} />
        </div>
        <CardRating rating={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default Card;
