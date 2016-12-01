const redux = require('redux');
const { searchTextReducer, showCompletedReducer, todosReducer } = require('reducers');

export const configure = (initialState = {}) => {
  const composer = redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  return redux.createStore(reducer, initialState, composer);
};
