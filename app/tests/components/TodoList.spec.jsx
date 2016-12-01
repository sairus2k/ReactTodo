const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo from 'Todo';
const todos = require('../fixtures/todo.json');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const store = configure({
      todos
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponent.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const el = ReactDOM.findDOMNode(todoList);
    expect(el.children[0].innerHTML).toBe('Nothing To Do');
  });

});
