const React = require('react');

const AddTodo = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  handleSubmit: function (event) {
    event.preventDefault();
    const todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="todoText" placeholder="What do you need to do?"/>
        <button className="button expanded">Add Todo</button>
      </form>
    );
  }
});

module.exports = AddTodo;