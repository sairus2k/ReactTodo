import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import {startLogout} from 'actions';

export class TodoApp extends React.Component {
  render() {
    const onLogout = e => {
      e.preventDefault();
      const { dispatch } = this.props;
      dispatch(startLogout());
    };
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-6">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(TodoApp);
