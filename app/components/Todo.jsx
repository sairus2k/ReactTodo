const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    createdAt: React.PropTypes.number.isRequired
  },
  render: function () {
    const { id, text, completed, onToggle, createdAt, completedAt } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created';
      let timestamp = createdAt;
      if (completed) {
        message = 'Completed';
        timestamp = completedAt;
      }
      return `${message} ${moment.unix(timestamp).format('Do of MMMM YYYY @ HH:mm')}`;
    };
    return (
      <div className={todoClassName} onClick={() => {
        onToggle(id)
      }}>
        <div>
          <input type="checkbox" ref="" checked={completed}/>
        </div>
        <div className="todo__subtext">
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
