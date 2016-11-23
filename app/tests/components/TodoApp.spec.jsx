const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('../../components/TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
});
