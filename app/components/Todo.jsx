const React = require('react');
const { connect } = require('react-redux');
const moment = require('moment');
const actions = require('actions');

export const Todo = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    createdAt: React.PropTypes.number.isRequired
  },
  render: function () {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
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
        dispatch(actions.toggleTodo(id));
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

export default connect()(Todo);
