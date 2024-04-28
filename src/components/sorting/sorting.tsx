import { SORT_TYPES } from '../../const';
import clsx from 'clsx';

type TSortingProps = {
  isOpened: boolean;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  onToggleSort: (isOpened: boolean) => void;
};

function Sorting({ isOpened, onToggleSort, onSortChange, selectedSort }: TSortingProps): JSX.Element {
  const handleSortClick = () => {
    onToggleSort(!isOpened);
  };

  const handleOptionClick = (sort: string) => {
    onSortChange(sort);
    onToggleSort(false);
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
          'places__options--opened': isOpened,
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
