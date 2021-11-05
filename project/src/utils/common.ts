import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const formatRunTime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');

const formatHumanizedDate = (date: Date): string => dayjs(date).format('MMMM D, YYYY');

export {formatRunTime, formatHumanizedDate};
