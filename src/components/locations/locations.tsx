import { useAppSelector, useAppDispatch } from '../../hooks';
import { setCity } from '../../redux/action/action';
import { LOCATIONS } from '../../const';

function Locations(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  const handleCityClick = (city: string) => {
    dispatch(setCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((city) => (
          <li key={city} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
              onClick={() => handleCityClick(city)}
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
