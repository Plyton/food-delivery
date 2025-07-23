export function base64UrlDecode(str: string): string {
  // Преобразуем из Base64URL в стандартный Base64
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  // Декодируем Base64 в бинарные данные (byte array)
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  // Преобразуем байты в строку UTF-8
  return new TextDecoder('utf-8').decode(bytes);
}
