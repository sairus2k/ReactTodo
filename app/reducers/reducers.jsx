const uuid = require('node-uuid');
const moment = require('moment');

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  const { text, id } = action;
  switch (action.type) {
    case 'ADD_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            ...action.updates
          }
        }
        return todo;
      });
    default:
      return state;
  }
};

export const authReducer = (state = {}, action) => {
  const { type, uid } = action;
  switch (type) {
    case 'LOGIN':
      return {
        uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
