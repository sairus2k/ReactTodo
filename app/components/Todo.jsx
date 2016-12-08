import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {startToggleTodo} from 'actions';

export class Todo extends React.Component {
  render() {
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
        dispatch(startToggleTodo(id, !completed));
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
}

Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  createdAt: React.PropTypes.number.isRequired
};

export default connect()(Todo);
