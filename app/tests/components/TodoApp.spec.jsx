const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  describe('handleAddTodo()', () => {
    it('should add todo to the todos state', () => {
      const todoText = 'test text';
      const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: []});
      todoApp.handleAddTodo(todoText);
      expect(todoApp.state.todos[0].text).toBe(todoText);
    });
  });
  describe('handleSearch()', () => {
    it('should add search text and show flag into state', () => {
      const searchText = 'test query';
      const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      expect(todoApp.state.showCompleted).toBe(false);
      expect(todoApp.state.searchText).toBe('');
      todoApp.handleSearch(true, searchText);
      expect(todoApp.state.showCompleted).toBe(true);
      expect(todoApp.state.searchText).toBe(searchText);
    });
  });
});
