import { Card } from 'model/card/card.model';
import { Todo } from 'model/todo/todo.model';

describe('Card model test', () => {
  const todo = new Todo('Todo1');
  const card = new Card(1, 1, 'Test1', [todo]);

  it('Should has properties', () => {
    expect(card.id).toBeDefined();
    expect(card.rowId).toBeDefined();
    expect(card.title).toBeDefined();
    expect(card.title).toBeDefined();
    expect(card.todos).toBeDefined();
  });

  it('Should has functions', () => {
    expect(card.setTitle).toBeFunction();
    expect(card.setTodos).toBeFunction();
    expect(card.toPOJO).toBeFunction();
  });

  it('todos should be array of Todo instances', () => {
    const [todoInstance] = card.todos;

    expect(card.todos).toContain(todo);
    expect(todoInstance instanceof Todo).toBeTrue();
  });

  it('Function setTitle should set title', () => {
    card.setTitle('test1');

    expect(card.title).toBe('test1');
  });

  it('Function setTodos should set todos', () => {
    card.setTodos(['test1', 'test2']);

    expect(card.todos.length).toBe(2);
    expect(card.todos).toEqual(jasmine.arrayContaining(['test1', 'test2']));
  });

  it('Function toPOJO should return POJO of Card instance', () => {
    const cardToPOJO = new Card(2, 2, 'Card2', [new Todo('Todo2')]);
    const expected = {
      rowId: 2,
      title: 'Card2',
      todos: [{ description: 'Todo2', status: 'active' }],
    };

    expect(cardToPOJO.toPOJO()).toEqual(expected);
  });
});
