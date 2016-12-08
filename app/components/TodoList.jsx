import {connect} from 'react-redux';
import React from 'react';

import Todo from 'Todo';
import TodoApi from 'TodoApi';


export class TodoList extends React.Component {
  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      const filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return filteredTodos.map(todo => {
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default connect(state => state)(TodoList);
