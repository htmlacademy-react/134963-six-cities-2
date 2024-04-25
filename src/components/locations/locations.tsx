import { LOCATIONS } from '../../const';

function Locations({
  activeCity,
  onCityClick,
}: {
  activeCity: string;
  onCityClick: (city: string) => void;
}): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((city) => (
          <li key={city} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${
                activeCity === city ? 'tabs__item--active' : ''
              }`}
              onClick={() => onCityClick(city)}
              href="#"
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
