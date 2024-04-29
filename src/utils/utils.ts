import dayjs from 'dayjs';
import { MAX_RATING } from '../const';
import { FullOffer } from '../types/offer';

export function calculateRatingPercentage(rating: number): number {
  return (rating / MAX_RATING) * 100;
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatToMonthYear(dateString: string): string {
  const date = dayjs(dateString);

  const formattedDate = date.format('MMMM YYYY');

  return formattedDate;
}

export function formatDateToISO(dateTime: string): string {
  const parsedDate = dayjs(dateTime, 'YYYY-MM-DDTHH:mm:ss.SSSZ');

  const formattedDate = parsedDate.format('YYYY-MM-DD');

  return formattedDate;
}

export function getSortedOffers(offers: FullOffer[], sortType: string) {
  const sortedOffers = [...offers];

  switch (sortType) {
    case 'Price: low to high': {
      return sortedOffers.sort((a, b) => a.price - b.price);
    }
    case 'Price: high to low': {
      return sortedOffers.sort((a, b) => b.price - a.price);
    }
    case 'Top rated first': {
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    }
    case 'Popular':
    default: return offers;
  }
}


