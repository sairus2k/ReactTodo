import React from 'react';
import {connect} from 'react-redux';

import {startAddTodo} from 'actions';

export class AddTodo extends React.Component {
  render() {
    const handleSubmit = event => {
      event.preventDefault();
      const { dispatch } = this.props;
      const todoText = this.refs.todoText.value;
      if (todoText.length > 0) {
        this.refs.todoText.value = '';
        dispatch(startAddTodo(todoText));
      } else {
        this.refs.todoText.focus();
      }
    };
    return (
      <div className="container__footer">
        <form onSubmit={handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
