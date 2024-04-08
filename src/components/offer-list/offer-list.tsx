import Card from '../card/card';
import { useCallback, useState } from 'react';
import { OfferType } from '../../types/offer';

type OfferProps = {offers:OfferType[]};

function OfferList({offers}: OfferProps): JSX.Element {

  const [, setActiveId] = useState<string | null>(null);

  const handleCardHover: (id: string | null) => void = useCallback((id) => {
    setActiveId(id || null);
  }, []);

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

