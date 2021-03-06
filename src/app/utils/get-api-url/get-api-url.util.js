/* eslint no-undef: "off" */

export function getApiUrl(url: string, param: string = ''): string {
  const origin = location.origin;
  let base = origin;

  // ENV provided through webpack config
  if (ENV === 'dev') {
    const [,, port] = origin.split(':');
    base = origin.replace(port, '3000');
  }

  base = `${base}/api`;

  switch (url) {
    case 'rows':
      return `${base}/rows/${param}`;

    case 'cards':
      return `${base}/cards/${param}`;

    case 'rows-expanded':
      return `${base}/rows?_embed=cards`;

    default:
      throw Error('Invalid api url');
  }
}
