import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from 'app/firebase/';

export const setSearchText = searchText => ({
  type: 'SET_SEARCH_TEXT',
  searchText
});

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const startAddTodo = text => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAd: null
    };
    const todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export const addTodos = todos => ({
  type: 'ADD_TODOS',
  todos
});

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const todosRef = firebaseRef.child('todos');
    return todosRef.once('value')
      .then(snapshot => {
        const rawTodos = snapshot.val();
        const keys = Object.keys(rawTodos);
        const todos = keys.map(key => ({
          id: key,
          ...rawTodos[key]
        }));
        dispatch(addTodos(todos));
      })
      .catch(e => {
        console.log('Error while fetching data from Firebase', e);
      });
  }
};

export const toggleShowCompleted = () => ({
  type: 'TOGGLE_SHOW_COMPLETED'
});

export const updateTodo = (id, updates) => ({
  type: 'UPDATE_TODO',
  id,
  updates
});

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider)
      .then(result => {
        console.log('Auth worked!', result);
      })
      .catch(error => {
        console.log('Unable to auth', error);
      });
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut()
      .then(() => {
        console.log('Logged out!');
      });
  };
};
