const expect = require('expect');

const TodoApi = require('TodoApi');

describe('TodoApi', () => {
  const todos = [{
    id: 12,
    text: 'some text',
    completed: false
  }];

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  describe('setTodos()', () => {
    it('should set valid todos array', () => {
      TodoApi.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = {a: 'b'};
      TodoApi.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos()', () => {
    it('should return empty array for bad localStorage data', () => {
      const actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return valid array in localStorage', () => {
      localStorage.setItem('todos', JSON.stringify(todos));
      const actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
});
