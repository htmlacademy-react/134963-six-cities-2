import Map from '../map/map';
import Sorting from '../sorting/sorting';
import { OfferType } from '../../types/offer';
import OfferList from '../offer-list/offer-list';

type CitiesProps = {offers:OfferType[]};

function Cities({offers}: CitiesProps): JSX.Element {

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">places to stay in Amsterdam</b>
        <Sorting />
        <OfferList offers={offers} />
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}

export default Cities;
