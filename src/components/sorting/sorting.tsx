import { useState } from 'react';
import { SORT_TYPES } from '../../const';
import clsx from 'clsx';

type TSortingProps = {
  selectedSort: string;
  onSortChange: (sort: string) => void;
};

function Sorting({onSortChange, selectedSort }: TSortingProps): JSX.Element {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSortClick = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleOptionClick = (sort: string) => {
    onSortChange(sort);
    setIsSortOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
      >
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={clsx('places__options places__options--custom', {
          'places__options--opened': isSortOpen,
        })}
      >
        {SORT_TYPES.map((option) => (
          <li
            key={option.name}
            className={clsx('places__option', {
              'places__option--active': option.name === selectedSort,
            })}
            tabIndex={0}
            onClick={() => handleOptionClick(option.name)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
