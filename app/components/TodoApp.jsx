const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const TodoApi = require('TodoApi');


const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoApi.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [...this.state.todos, {
        id: uuid(),
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
      }]
    });
  },
  handleToggle: function (id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : null;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText
    })
  },
  render: function () {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
