import { ChangeEvent, Fragment, useState } from 'react';

interface FormData {
    rating: string | null;
    review: string;
  }

  interface RatingOption {
    value: string;
    title: string;
  }

const ratingOptions: RatingOption[] = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' },
];

function OfferCommentForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    rating: null,
    review: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingOptions.map((option) => (
          <Fragment key={option.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={option.value}
              id={`${option.value}-stars`}
              type="radio"
              onChange={handleInputChange}
              checked={formData.rating === option.value}
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
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formData.rating || formData.review.length < 50}>Submit</button>
      </div>
    </form>
  );
}

export default OfferCommentForm;


