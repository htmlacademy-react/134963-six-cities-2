import Card from '../card/card';
import { OfferType } from '../../types/offer';

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
