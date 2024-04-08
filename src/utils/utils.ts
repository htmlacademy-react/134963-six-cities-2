import { MAX_RATING } from '../const';

export function calculateRatingPercentage(rating: number): number {
  return (rating / MAX_RATING) * 100;
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
