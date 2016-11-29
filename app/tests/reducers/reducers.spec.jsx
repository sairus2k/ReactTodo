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
        text: 'Walk the dog'
      };
      const res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: '9f1fad8a-b912-4187-906f-a872b44cacad'
      };
      expect(todos[0].completed).toEqual(false);
      expect(todos[0].completedAt).toNotExist();
      const res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    });
  });

});