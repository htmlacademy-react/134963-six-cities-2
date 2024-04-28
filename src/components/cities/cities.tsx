import Map from '../map/map';
import Sorting from '../sorting/sorting';
import OfferList from '../offer-list/offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectedSort, setActiveOffer } from '../../redux/action/action';
import { FullOffer } from '../../types/offer';
import { useState } from 'react';

type TCitiesProps = {
  selectedOffers: FullOffer[];
  activeCity: string;
};

function Cities({ selectedOffers, activeCity }: TCitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeOfferId = useAppSelector((state) => state.activeOfferId);
  const selectedSortType = useAppSelector((state) => state.selectedSort);

  const [isSortOpen, setIsSortOpen] = useState(true);


  const handleCardHover = (id: string | null) => {
    dispatch(setActiveOffer(id));
  };

  const mapOffers = selectedOffers.length > 0 ? selectedOffers : [];
  const city = selectedOffers.length > 0 ? selectedOffers[0].city : null;

  const handleSortChange = (sort: string) => {
    dispatch(selectedSort(sort));
  };

  const handleToggleSort = (isOpened: boolean) => {
    setIsSortOpen(isOpened);
  };

  const sortedOffers = [...selectedOffers];

  if (selectedSortType === 'Price: low to high') {
    sortedOffers.sort((a, b) => a.price - b.price);
  } else if (selectedSortType === 'Price: high to low') {
    sortedOffers.sort((a, b) => b.price - a.price);
  } else if (selectedSortType === 'Top rated first') {
    sortedOffers.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`places to stay in ${activeCity}`}</b>
        {selectedOffers.length > 0 && (
          <Sorting
            isOpened={isSortOpen}
            selectedSort={selectedSortType}
            onSortChange={handleSortChange}
            onToggleSort={handleToggleSort}
          />
        )}
        <OfferList
          offers={sortedOffers}
          listBlock="cities__places-list"
          block="cities"
          onCardHover={handleCardHover}
        />
      </section>
      <div className="cities__right-section">
        <Map
          offers={mapOffers}
          city={city}
          activeOfferId={activeOfferId}
          mapClass="cities__map"
        />
      </div>
    </div>
  );
}

export default Cities;
