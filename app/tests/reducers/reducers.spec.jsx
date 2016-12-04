const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');
const todos = require('../fixtures/todo.json');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        text: 'dog'
      };
      const res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle state', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: todos[0]
      };
      const res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add new todos', () => {
      const action = {
        type: 'ADD_TODOS',
        todos
      };
      const res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(todos.length);
      expect(res).toEqual(todos);
    });

    it('should update todo', () => {
      const updates = {
        completed: false,
        completedAt: null
      };
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      expect(todos[0].completed).toEqual(false);
      expect(todos[0].completedAt).toNotExist();
      const res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);

    });
  });

});
