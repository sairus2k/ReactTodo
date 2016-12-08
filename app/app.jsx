import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import * as actions from 'actions';
import firebase from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

const store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());

require('foundation-sites/dist/foundation.min.css');
require('./styles/app.scss');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
