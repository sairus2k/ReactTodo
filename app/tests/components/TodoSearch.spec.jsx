const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('handleSearch()', () => {
    const searchText = 'Sample ToDo';
    const expectedSearchText = searchText.toLowerCase();
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    const search = todoSearch.refs.searchText;
    const checkbox = todoSearch.refs.showCompleted;

    it('should call onSearch prop when input changes', () => {
      search.value = searchText;
      TestUtils.Simulate.change(search);
      expect(spy).toHaveBeenCalledWith(false, expectedSearchText);
    });

    it('should call onSearch prop when checkbox is checked', () => {
      checkbox.checked = true;
      TestUtils.Simulate.change(checkbox);
      expect(spy).toHaveBeenCalledWith(true, expectedSearchText)
    });
  });
});
