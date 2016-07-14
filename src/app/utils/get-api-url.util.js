export function getApiUrl(url, param = '') {
  const origin = location.origin;
  let base = origin;

  if (ENV === 'dev') {
    const [,,port] = origin.split(':');
    base = origin.replace(port, '3000');
  }

  switch (url) {
    case 'todos':
      return `${base}/todos/${param}`;

    case 'cards':
      return `${base}/cards/${param}`;

    case 'todo-lists':
      return `${base}/todoLists/${param}`;

    case 'cards-expanded':
      return `${base}/cards?_embed=todoLists`;

    default:
      throw 'Invalid api url';
  }
}