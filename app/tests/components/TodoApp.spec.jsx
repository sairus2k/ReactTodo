const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');


describe('TodoApp', () => {
  const todoFixture = [
    {
      id: '9f1fad8a-b912-4187-906f-a872b44cacad',
      text: 'Walk the dog',
      completed: false
    },
    {
      id: '52788551-5ca6-4529-91a9-93e2fe8cf372',
      text: 'Clean the yard',
      completed: true
    },
    {
      id: '615276e3-5f82-4a7e-95a0-823f95198219',
      text: 'Leave mail on porch',
      completed: true
    },
    {
      id: '1d14a5d6-061a-4d5f-b864-13e5234ec6ff',
      text: 'Play video games',
      completed: false
    }
  ];

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

  describe('handleToggle()', () => {
    it('should toggle completed status of todo', () => {
      const todoId = '1d14a5d6-061a-4d5f-b864-13e5234ec6ff';
      const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: todoFixture});
      expect(todoApp.state.todos[3].completed).toBe(false);
      todoApp.handleToggle(todoId);
      expect(todoApp.state.todos[3].completed).toBe(true);
    });
  });

});
