import { useState } from 'react';

function Locations(): JSX.Element {
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const [activeTab , setActiveCity] = useState('');

  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${activeTab === city ? 'tabs__item--active' : ''}`}
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
