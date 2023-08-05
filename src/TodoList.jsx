import React from 'react';
import styles from './list.module.css';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className={styles.list}>
      {/* Map through the todos array and render each item as a list */}
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className={styles.listgrid}>
            <input
              type='checkbox'
              className={styles.checkin}
              checked={todo.completed}
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />

            <div className={styles.itemtitle}> {todo.title}</div>

            <button
              className={styles.delbut}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
