import { calculateRatingPercentage } from '../../utils/utils';

type TCardRatingProps = {
    rating: number;
  };

function CardRating({rating}: TCardRatingProps): JSX.Element {

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: `${calculateRatingPercentage(rating)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
export default CardRating;

