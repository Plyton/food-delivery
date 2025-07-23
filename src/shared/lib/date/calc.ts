export function getDaysBetweenDates(startDate: Date, endDate: Date): number {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const diffInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.round(diffInMilliseconds / oneDayInMilliseconds);
}

export function calcTimeZone(): string {
  const timezoneOffset = new Date().getTimezoneOffset();
  const offset = Math.abs(timezoneOffset);
  return `${timezoneOffset < 0 ? '+' : '-'}${(`00${Math.floor(offset / 60)}`)
    .slice(-2)}:${(`00${offset % 60}`).slice(-2)}`;
}
