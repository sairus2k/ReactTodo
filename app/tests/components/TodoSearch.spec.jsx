const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

// const TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('handleSearch()', () => {
    const searchText = 'Sample ToDo';
    const expectedSearchText = searchText.toLowerCase();
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    const search = todoSearch.refs.searchText;
    const checkbox = todoSearch.refs.showCompleted;

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText
      };
      search.value = searchText;
      TestUtils.Simulate.change(search);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      checkbox.checked = true;
      TestUtils.Simulate.change(checkbox);
      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
