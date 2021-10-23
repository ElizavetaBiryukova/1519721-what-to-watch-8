import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const formatRunTime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');

export const formatHumanizedDate = (date: Date): string => dayjs(date).format('MMMM D, YYYY');


