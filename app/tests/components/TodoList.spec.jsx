const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');
const todos = require('../fixtures/todo.json');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponent.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const el = ReactDOM.findDOMNode(todoList);
    expect(el.children[0].innerHTML).toBe('Nothing To Do');
  });

});
