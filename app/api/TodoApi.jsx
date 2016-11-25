module.exports = {
  setTodos: function (todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

  },

  getTodos: function () {
    const stringTodos = localStorage.getItem('todos');
    let todos;

    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      console.error(error);
    }

    return Array.isArray(todos) ? todos : [];
  },

  filterTodos: function (todos, showCompleted, searchText) {
    const lowerSearchText = searchText.toLowerCase();
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });

    if (searchText.length > 0) {
      filteredTodos = filteredTodos.filter(todo => {
        const text = todo.text.toLowerCase();
        return text.indexOf(lowerSearchText) > -1;
      });
    }

    filteredTodos.sort((a, b) => {
      if (a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      }
      return 0;
    });

    return filteredTodos;
  }
};
