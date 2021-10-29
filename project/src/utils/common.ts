import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const formatRunTime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');

export const formatHumanizedDate = (date: Date): string => dayjs(date).format('MMMM D, YYYY');

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export function getRandomElement<T>(array: T[]): T {
  return array[getRandomNumber(0, array.length - 1)];
}
