import { Review } from '../../types/comments';
import ReviewItem from '../reviews-item/reviews-item';

type TListReviews = {
    reviews: Review[];
}

function ListReviews({reviews}: TListReviews): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
    </ul>
  );
}

export default ListReviews;
