import { Helmet } from 'react-helmet-async';
import { FullOffer } from '../../types/offer';
import { useParams } from 'react-router-dom';
import { Review } from '../../types/reviews';
import {
  calculateRatingPercentage,
  capitalizeFirstLetter,
} from '../../utils/utils';
import OfferCommentForm from '../../components/offer-comment-form/offer-comment-form';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ListReviews from '../../components/reviews-list/reviews-list';
import OfferList from '../../components/offer-list/offer-list';

type TOfferPageProp = {
  offers: FullOffer[];
  reviews: Review[];
};

function OfferPage({ offers, reviews }: TOfferPageProp): JSX.Element {
  const { id } = useParams();
  const offerInfo = offers.find((offer) => offer.id === id);
  const nearestOffers = offers.slice(0, 3);

  return (
    <div className="page">
      <Helmet>{'6 cities - Offer'}</Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerInfo?.images.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerInfo?.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offerInfo?.title}</h1>
                <button
                  className={`offer__bookmark-button button ${
                    offerInfo?.isFavorite
                      ? 'offer__bookmark-button--active'
                      : ''
                  }`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{
                      width: `${calculateRatingPercentage(
                        offerInfo?.rating ?? 0
                      )}%`,
                    }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {capitalizeFirstLetter(offerInfo?.type ?? '')}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerInfo?.type ?? ''}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerInfo?.bedrooms ?? 0}{' '}
                  {offerInfo?.bedrooms && offerInfo?.bedrooms > 1
                    ? 'Bedrooms'
                    : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerInfo?.maxAdults ?? 0}{' '}
                  {offerInfo?.maxAdults && offerInfo?.maxAdults > 1
                    ? 'adults'
                    : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerInfo?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerInfo?.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offerInfo?.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offerInfo?.host.name}
                  </span>
                  {offerInfo?.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offerInfo?.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ListReviews reviews={reviews} />
                <OfferCommentForm />
              </section>
            </div>
          </div>
          <Map
            offers={nearestOffers}
            mapClass="offer__map"
            city={nearestOffers[0].city}
            activeOfferId={null}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferList
              offers={nearestOffers}
              listBlock="near-places__list"
              block="near-places"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
