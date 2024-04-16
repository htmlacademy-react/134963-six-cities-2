import Card from '../card/card';
import { useCallback } from 'react';
import { OfferType } from '../../types/offer';

type TOfferProps = {
  offers:OfferType[];
  listBlock: string;
  block: string;
  extraClass?: string;
    onCardHover?: (id: string | null) => void;
  };

function OfferList({offers, onCardHover, listBlock, extraClass, block}: TOfferProps): JSX.Element {
  const handleCardHover = useCallback((id: string | null) => {
    if (onCardHover) {
      onCardHover(id);
    }
  }, [onCardHover]);

  return (
    <div className={`${listBlock} places__list ${extraClass ?? ''}`}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={handleCardHover}
          block={block}
        />))}
    </div>
  );
}

export default OfferList;

