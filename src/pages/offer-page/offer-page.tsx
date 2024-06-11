import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import {
  calculateRatingPercentage,
  capitalizeFirstLetter,
} from '../../utils/utils';
import OfferCommentForm from '../../components/offer-comment-form/offer-comment-form';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ListReviews from '../../components/reviews-list/reviews-list';
import OfferList from '../../components/offer-list/offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { selectOffer, selectNearByOffers, selectRequestStatus, selectNearbyStatus } from '../../redux/slices/offer/offerSlice';
import { selectComments } from '../../redux/slices/comments/commentSlice';
import { fetchOfferByIdAction, fetchNearByOffersAction } from '../../redux/slices/offer/offerThunks';
import Spinner from '../../components/spinner/spinner';
import NotFoundPage from '../not-found-page/not-found-page';
import { AuthorizationStatus, COMMENTS_COUNT, NEAR_OFFERS_COUNT } from '../../const';
import { fetchCommentsAction } from '../../redux/slices/comments/commentThunks';
import { selectAuthorizationStatus } from '../../redux/slices/user/userSlice';
import CardBookmarkButton from '../../components/card-bookmark-button/card-bookmark-button';


function OfferPage(): JSX.Element {
  const { offerId } = useParams<{ offerId: string }>();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const status = useAppSelector(selectRequestStatus);
  const nearbyStatus = useAppSelector(selectNearbyStatus);
  const offerInfo = useAppSelector(selectOffer);
  const nearestOffers = useAppSelector(selectNearByOffers);
  const comments = useAppSelector(selectComments);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferByIdAction(offerId));
      dispatch(fetchNearByOffersAction(offerId));
      dispatch(fetchCommentsAction(offerId));
    }
  }, [dispatch, offerId]);

  if (status.isError) {
    return <NotFoundPage />;
  }

  if (status.isLoading || status.isIdle || nearbyStatus.isLoading || !offerInfo) {
    return <Spinner />;
  }

  const threeNearOffers = nearestOffers.slice(0, NEAR_OFFERS_COUNT);
  const tenComments = comments.slice(0, COMMENTS_COUNT);

  return (
    <div className="page">
      <Helmet>{'6 cities - Offer'}</Helmet>
      <Header showNavigation={false} />

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
                <CardBookmarkButton extraClass='offer' isFavorite={offerInfo.isFavorite} offerId={offerInfo.id} width={31} height={33}/>
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
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ListReviews reviews={tenComments} />
                {authorizationStatus === AuthorizationStatus.Auth && <OfferCommentForm offerId={offerId ?? ''} />}
              </section>
            </div>
          </div>
          <Map
            offers={threeNearOffers}
            mapClass="offer__map"
            city={threeNearOffers[0].city}
            activeOfferId={null}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferList
              offers={threeNearOffers}
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
