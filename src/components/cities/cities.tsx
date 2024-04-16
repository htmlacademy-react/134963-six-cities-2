import Map from '../map/map';
import Sorting from '../sorting/sorting';
import { OfferType } from '../../types/offer';
import { useState } from 'react';
import OfferList from '../offer-list/offer-list';

type CitiesProps = {
  offers: OfferType[];
};

function Cities({ offers }: CitiesProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleCardHover = (id: string | null) => {
    setActiveOfferId(id);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">places to stay in Amsterdam</b>
        <Sorting />
        <OfferList
          offers={offers}
          listBlock="cities__places-list"
          block="cities"
          onCardHover={handleCardHover}
          extraClass="tabs__content"
        />
      </section>
      <div className="cities__right-section">
        <Map
          offers={offers}
          city={offers[0].city}
          activeOfferId={activeOfferId}
          mapClass="cities__map"
        />
      </div>
    </div>
  );
}

export default Cities;
