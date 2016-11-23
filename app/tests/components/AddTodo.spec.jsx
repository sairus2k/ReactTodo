const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('handleSubmit()', () => {
    it('should call onAddTodo prop on valid data', () => {
      const todoText = 'Check mail';
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      const el = ReactDOM.findDOMNode(addTodo);
      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(el);
      expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddTodo prop when invalid input', () => {
      const todoText = '';
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      const el = ReactDOM.findDOMNode(addTodo);
      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(el);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});
