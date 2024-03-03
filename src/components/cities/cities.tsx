import Card from '../card/card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';


function Cities(): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">places to stay in Amsterdam</b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}

export default Cities;
