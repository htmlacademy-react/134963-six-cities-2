import { Review } from '../../types/reviews';
import { calculateRatingPercentage, formatDate, convertDateTime } from '../../utils/utils';

type TReviewItem ={
    review: Review;
}

function ReviewItem({review}: TReviewItem): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: `${calculateRatingPercentage(
                review?.rating ?? 0
              )}%`,
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={convertDateTime(review.date)}>
          {formatDate(review.date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
