import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, RATING_OPTIONS } from '../../const';
import { addCommentAction } from '../../redux/slices/comments/comment-thunks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCommentsStatus } from '../../redux/slices/comments/comment-slice';
import { TFormData, TOfferFromProps } from '../../types/offer-comment-form';


function OfferCommentForm({ offerId }: TOfferFromProps): JSX.Element {
  const [formData, setFormData] = useState<TFormData>({
    rating: 0,
    review: '',
  });

  const dispatch = useAppDispatch();

  const status = useAppSelector(selectCommentsStatus);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const newValue = name === 'rating' ? parseInt(value, 10) : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  useEffect(()=>{
    if (status.isSuccess){
      setFormData({
        rating: 0,
        review: '',
      });
    }
  }, [status]);

  const isValid =
    !formData.rating ||
    formData.review.length < MIN_REVIEW_LENGTH ||
    formData.review.length > MAX_REVIEW_LENGTH;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isValid) {
      return;
    }

    dispatch(addCommentAction({
      offerId: offerId,
      body: {
        comment: formData.review,
        rating: Number(formData.rating),
      }
    }));

  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_OPTIONS.map((option) => (
          <Fragment key={option.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={option.value}
              id={`${option.value}-stars`}
              type="radio"
              onChange={handleInputChange}
              checked={formData.rating === +option.value}
            />
            <label
              htmlFor={`${option.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={option.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferCommentForm;
