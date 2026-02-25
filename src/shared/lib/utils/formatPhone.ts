export function formatPhoneToRaw(tel: string): string {
  const digits = tel.replace(/\D/g, '');

  if (digits.startsWith('8')) return '7' + digits.slice(1);
  if (digits.startsWith('7')) return digits;

  return digits;
}
