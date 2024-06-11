import { Comment } from '../../types/comments';
import ReviewItem from '../reviews-item/reviews-item';

type TListReviews = {
    reviews: Comment[];
}

function ListReviews({reviews}: TListReviews): JSX.Element {

  const sortedReviews = [...reviews].reverse();

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
    </ul>
  );
}

export default ListReviews;
