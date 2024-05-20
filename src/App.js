import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]); // Array to store todos
  const [newTodo, setNewTodo] = useState(''); // State for new todo text

  const addTodo = () => {
    if (!newTodo) return; // Avoid adding empty todos
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo(''); // Clear new todo input after adding
  };

  const toggleCompleted = (todoIndex) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) =>
        index === todoIndex ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (todoIndex) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== todoIndex));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;