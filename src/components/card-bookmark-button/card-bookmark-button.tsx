import clsx from 'clsx';

type CardBookmarkButtonProps = {
    isFavorite: boolean;
  }

function CardBookmarkButton({ isFavorite }: CardBookmarkButtonProps): JSX.Element {
  return (
    <button
      className={clsx('place-card__bookmark-button button', {
        'place-card__bookmark-button--active': isFavorite,
      })}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'Add to bookmarks'}
      </span>
    </button>
  );
}

export default CardBookmarkButton;


