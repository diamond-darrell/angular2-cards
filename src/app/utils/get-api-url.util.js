export function getApiUrl(url, param = '') {
  const origin = location.origin;
  let base = origin;

/* eslint-disable */
  // ENV provided through webpack config
  if (ENV === 'dev') {
/* eslint-enable */
    const [,, port] = origin.split(':');
    base = origin.replace(port, '3000');
  }

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
