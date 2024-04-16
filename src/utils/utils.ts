import dayjs from 'dayjs';
import { MAX_RATING } from '../const';

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

