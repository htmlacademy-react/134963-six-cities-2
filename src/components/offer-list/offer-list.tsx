import Card from '../card/card';
import { useCallback } from 'react';
import { OfferType } from '../../types/offer';

type OfferProps = {
  offers:OfferType[];
    onCardHover: (id: string | null) => void;
  };

function OfferList({offers, onCardHover}: OfferProps): JSX.Element {
  const handleCardHover = useCallback((id: string | null) => {
    onCardHover(id);
  }, [onCardHover]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={handleCardHover}
        />))}
    </div>
  );
}

export default OfferList;

