const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Do something else'
    }];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  });
});
