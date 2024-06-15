import Map from '../map/map';
import Sorting from '../sorting/sorting';
import OfferList from '../offer-list/offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FullOffer } from '../../types/offer';
import { getSortedOffers } from '../../utils/utils';
import { selectActiveOfferId, setActiveOffer } from '../../redux/slices/offers/offers-slice';
import { selectSelectedSort, selectSort } from '../../redux/slices/ui/ui';

type TCitiesProps = {
  selectedOffers: FullOffer[];
  activeCity: string;
};

function Cities({ selectedOffers, activeCity }: TCitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeOfferId = useAppSelector(selectActiveOfferId);
  const selectedSortType = useAppSelector(selectSelectedSort);

  const handleCardHover = (id: string | null) => {
    dispatch(setActiveOffer(id));
  };

  const mapOffers = selectedOffers.length > 0 ? selectedOffers : [];
  const city = selectedOffers.length > 0 ? selectedOffers[0].city : null;

  const handleSortChange = (sort: string) => {
    dispatch(selectSort(sort));
  };

  const sortedOffers = getSortedOffers(selectedOffers, selectedSortType);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{selectedOffers.length} places to stay in {activeCity}</b>
        {selectedOffers.length > 0 && (
          <Sorting
            selectedSort={selectedSortType}
            onSortChange={handleSortChange}
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
