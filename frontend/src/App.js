import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/todos`)
      .then(res => res.json())
      .then(setTodos);
  }, []);

  const addTodo = async (text) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (id) => {
    await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(t => t.id !== id));
  };

  const summarize = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/summarize`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todos })
    });
    const data = await res.json();
    alert('Summary sent to Slack: ' + data.summary);
  };

  return (
    <div className="App">
      <h1>Todo Summary Assistant</h1>
      <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      <button onClick={summarize}>Summarize & Send to Slack</button>
    </div>
  );
}

export default App;
