export function normalizeDateBy(value: Date): string {
  return value.toLocaleDateString();
}

export function getTimeByDate(date: Date): string {
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function monthStringTransformWordEnding(month: string): string {
  return month[month.length - 1] === 'т'
    ? `${month}а`
    : `${month.slice(0, month.length - 1)}я`;
}
