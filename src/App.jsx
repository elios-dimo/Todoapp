import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import styles from './styles.module.css';

function App() {
  const [newItem, setNewItem] = useState(''); // State to store the new item
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('items'); // Retrieve todos from local storage
    if (localValue == null) return []; // If no todos found in local storage, initialize as an empty array
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todos)); // Store todos in local storage whenever it changes
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === '') return; // Do not add empty items to the list
    setNewItem(''); // Clear the input field after submitting the form
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]); // Add the new item to the todos list
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      {/* TodoForm component to add new items */}
      <TodoForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <h1>TODO LIST</h1>
      {/* TodoList component to display the list of todos */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
