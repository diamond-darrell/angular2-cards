import { Todo } from 'model/todo/todo.model';

describe('Todo model test', () => {
  const todo = new Todo('Todo1');

  it('Should has properties', () => {
    expect(todo.description).toBeDefined();
    expect(todo.status).toBeDefined();
  });

  it('Should has functions', () => {
    expect(typeof(todo.toPOJO)).toBe('function');
    expect(typeof(todo.toggle)).toBe('function');
    expect(typeof(todo.setDescription)).toBe('function');
    expect(typeof(todo.isCompleted)).toBe('function');
  });

  it('Function toPOJO should return POJO of Todo instance', () => {
    const expected = {
      description: 'Todo1',
      status: 'active',
    };

    expect(todo.toPOJO()).toEqual(expected);
  });

  it('Function toggle should toggle todo status', () => {
    todo.toggle();
    expect(todo.status).toBe('completed');

    todo.toggle();
    expect(todo.status).toBe('active');
  });


  it('Function setDescription should set description of todo and set active status', () => {
    todo.toggle();
    todo.setDescription('Test');

    expect(todo.description).toBe('Test');
    expect(todo.status).toBe('active');
  });

  it('Function isCompleted should return true if todo is completed', () => {
    todo.toggle();
    expect(todo.isCompleted()).toBe(true);

    todo.toggle();
    expect(todo.isCompleted()).toBe(false);
  });
});
