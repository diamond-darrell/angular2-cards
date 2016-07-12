export function getApiUrl(url) {
  const base = 'http://localhost:3000';

  switch (url) {
    case 'todos':
      return `${base}/todos`;

    case 'todo-lists':
      return `${base}/todoLists`;

    case 'cards':
      return `${base}/cards`;

    case 'card-expanded':
      return `${base}/cards?_embed=todoLists`;

    default:
      throw 'Invalid api url';
  }
}