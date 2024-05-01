import Card from '../card/card';
import { OfferType } from '../../types/offer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner';
import { fetchOffers } from '../../redux/api-actions/api-actions';

type TOfferProps = {
  offers: OfferType[];
  listBlock: string;
  block: string;
  onCardHover?: (id: string | null) => void;
};

function OfferList({
  offers,
  onCardHover,
  listBlock,
  block,
}: TOfferProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={`${listBlock} places__list}`}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={onCardHover}
          block={block}
        />
      ))}
    </div>
  );
}

export default OfferList;
