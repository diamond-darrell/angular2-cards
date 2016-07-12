export function getApiUrl(url, param) {
  const base = 'http://localhost:3000';

  switch (url) {
    case 'todos':
      return `${base}/todos`;

    case 'todo-lists':
      return `${base}/todoLists`;

    case 'cards':
      return `${base}/cards`;

    case 'cards-expanded':
      return `${base}/cards?_embed=todoLists`;

    case 'todo-list':
      if (!param) {
        throw 'Param is required!';
      }
      return `${base}/todoList/${param}`;

    case 'todo-list-expanded':
      if (!param) {
        throw 'Param is required!';
      }
      return `${base}/todoList/${param}?_embed=todos`;

    default:
      throw 'Invalid api url';
  }
}