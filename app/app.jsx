const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();
const TodoApi = require('TodoApi');


store.dispatch(actions.startAddTodos());

require('foundation-sites/dist/foundation.min.css');
require('./styles/app.scss');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
