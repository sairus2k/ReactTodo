const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
  render: function () {
    const { todos, onToggle } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onToggle={onToggle}/>
        )
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
