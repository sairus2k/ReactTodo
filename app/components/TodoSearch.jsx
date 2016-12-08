import React from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompleted} from 'actions';

export class TodoSearch extends React.Component {
  render() {
    const searchChangeHandler = () => {
      const { dispatch } = this.props;
      const searchText = this.refs.searchText.value;
      dispatch(setSearchText(searchText));
    };
    const handleSearch = () => {
      const { dispatch } = this.props;
      dispatch(toggleShowCompleted());
    };
    const { showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText}
                 onChange={searchChangeHandler}/>
        </div>
        <label>
          <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={handleSearch}/>
          <span>Show completed todos</span>
        </label>
      </div>
    );
  }
}

export default connect(
  state => ({
    showCompleted: state.showCompleted,
    searchText: state.searchText
  })
)(TodoSearch);
