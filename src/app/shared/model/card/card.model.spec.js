import { Card } from 'model/card/card.model';
import { Todo } from 'model/todo/todo.model';

describe('Card model test', () => {
  const todo = new Todo('Todo1');
  const card = new Card(1, 1, 'Test1', [todo]);

  it('Should has properties', () => {
    expect(typeof(card.id)).not.toBe(undefined);
    expect(typeof(card.rowId)).not.toBe(undefined);
    expect(typeof(card.title)).not.toBe(undefined);
    expect(typeof(card.title)).not.toBe(undefined);
    expect(typeof(card.todos)).not.toBe(undefined);
  });

  it('Should has functions', () => {
    expect(typeof(card.setTitle)).toBe('function');
    expect(typeof(card.setTodos)).toBe('function');
    expect(typeof(card.toPOJO)).toBe('function');
  });

  it('todos should be array of Todo instances', () => {
    const [todoInstance] = card.todos;

    expect(card.todos).toEqual(jasmine.arrayContaining([todo]));
    expect(todoInstance instanceof Todo).toBe(true);
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
