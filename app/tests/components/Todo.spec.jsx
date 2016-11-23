const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const Todo = require('../../components/Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
