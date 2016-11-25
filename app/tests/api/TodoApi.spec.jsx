const expect = require('expect');

const TodoApi = require('TodoApi');
const todos = require('../fixtures/todo.json');

describe('TodoApi', () => {

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

  describe('filterTodos()', () => {
    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(4);
    });
    it('should return non completed items when showCompleted is false', () => {
      const filteredTodos = TodoApi.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(2);
    });
    it('should sort by completed status', () => {
      const filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos[3].completed).toBe(true);
    });
    it('should filter todos by searchText', () => {
      const searchText = 'walk';
      const filteredTodos = TodoApi.filterTodos(todos, true, searchText);
      expect(filteredTodos.length).toBe(1);
    });
    it('should return all todos if searchText is empty', () => {
      const filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(4);
    });

  });

});
