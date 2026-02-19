export function getFirstDateOfWeek(date: Date): Date {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

export function getLastDateOfWeek(date: Date): Date {
  const firstDay = getFirstDateOfWeek(date);
  return new Date(firstDay.setDate(firstDay.getDate() + 6));
}

export function getFirstDateOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function getLastDateOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export function getFirstDateOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1);
}

export function getLastDateOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 11, 31);
}
