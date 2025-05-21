import React, { useState } from 'react';

function TodoList({ todos, addTodo, deleteTodo }) {
  const [text, setText] = useState('');

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New todo" />
      <button onClick={() => { addTodo(text); setText(''); }}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text} <button onClick={() => deleteTodo(todo.id)}>❌</button></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
