const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');
const todoFixture = require('../fixtures/todo.json');

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
      expect(todoApp.state.todos[0].createdAt).toBeA('number');
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

  describe('handleToggle()', () => {
    it('should toggle completed status of todo', () => {
      const todoId = '1d14a5d6-061a-4d5f-b864-13e5234ec6ff';
      const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: todoFixture});
      expect(todoApp.state.todos[3].completed).toBe(false);
      expect(todoApp.state.todos[3].completedAt).toNotExist();
      todoApp.handleToggle(todoId);
      expect(todoApp.state.todos[3].completed).toBe(true);
      expect(todoApp.state.todos[3].completedAt).toBeA('number');
    });

    it('should remove completedAt when toggle from true to false', () => {
      const todoId = '615276e3-5f82-4a7e-95a0-823f95198219';
      const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: todoFixture});
      expect(todoApp.state.todos[2].completed).toBe(true);
      expect(todoApp.state.todos[2].completedAt).toBeA('number');
      todoApp.handleToggle(todoId);
      expect(todoApp.state.todos[2].completed).toBe(false);
      expect(todoApp.state.todos[2].completedAt).toNotExist();

    });
  });

});
