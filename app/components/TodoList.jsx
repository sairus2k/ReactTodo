const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
  render: function () {
    const { todos, onToggle } = this.props;
    const renderTodos = () => {
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
