const React = require('react');
const { connect } = require('react-redux');
const actions = require('actions');

export const TodoSearch = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },
  searchChangeHandler: function () {
    const { dispatch } = this.props;
    const searchText = this.refs.searchText.value;
    dispatch(actions.setSearchText(searchText));
  },
  handleSearch: function () {
    const { dispatch } = this.props;
    dispatch(actions.toggleShowCompleted());
  },
  render: function () {
    const { showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText}
                 onChange={this.searchChangeHandler}/>
        </div>
        <label>
          <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.handleSearch}/>
          <span>Show completed todos</span>
        </label>
      </div>
    );
  }
});

export default connect(
  state => ({
    showCompleted: state.showCompleted,
    searchText: state.searchText
  })
)(TodoSearch);
