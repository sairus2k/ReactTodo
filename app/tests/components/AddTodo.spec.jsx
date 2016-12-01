const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const { AddTodo } = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('handleSubmit()', () => {
    it('should call dispatch ADD_TODO when valid todo text', () => {
      const todoText = 'Check mail';
      const action = {
        type: 'ADD_TODO',
        text: todoText
      };
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(form);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
      const todoText = '';
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      const el = ReactDOM.findDOMNode(addTodo);
      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(el);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});
