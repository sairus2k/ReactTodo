const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const { Todo } = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
  it('should dispatch TOGGLE_TODO action on click', () => {
    const todoDate = {
      id: '9f1fad8a-b912-4187-906f-a872b44cacad',
      text: 'Walk the dog',
      completed: false
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoDate} dispatch={spy}/>);
    const el = ReactDOM.findDOMNode(todo);
    TestUtils.Simulate.click(el);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoDate.id
    });
  });
});
