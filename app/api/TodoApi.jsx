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
  }
};
