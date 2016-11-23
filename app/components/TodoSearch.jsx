const React = require('react');

const TodoSearch = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },
  handleSearch: function () {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value.toLowerCase();
    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <label>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          <span>Show completed todos</span>
        </label>
      </div>
    );
  }
});

module.exports = TodoSearch;
