export function getApiUrl(url, param = '') {
  const base = location.origin;

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