import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import * as actions from 'actions';

const store = require('configureStore').configure();


store.dispatch(actions.startAddTodos());

require('foundation-sites/dist/foundation.min.css');
require('./styles/app.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <Route path='todos' component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
