export function setCookie(
  name: string,
  value: string,
  options: {
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
  } = {}
) {
  const { expires, path = '/', domain, secure } = options;

  let cookie = `${name}=${encodeURIComponent(value)}`;

  if (expires) cookie += `; expires=${expires.toUTCString()}`;
  if (path) cookie += `; path=${path}`;
  if (domain) cookie += `; domain=${domain}`;
  if (secure) cookie += '; secure';

  document.cookie = cookie;
}
