const todos = []; // Temporary in-memory store

exports.getTodos = (req, res) => {
  res.json(todos);
};

exports.addTodo = (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
};

exports.deleteTodo = (req, res) => {
  const index = todos.findIndex(t => t.id == req.params.id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};
