import React from 'react';
import styles from './form.module.css';

function TodoForm({ newItem, setNewItem, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='item'>ADD ITEM</label>
      {/* Input field to add new item */}
      <input
        maxLength='20'
        className={styles.itemTodo}
        type='text'
        placeholder='Add your item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} // Update the newItem state when input value changes
      />
      {/* Button to submit the form */}
      <button className={styles.addbut}>ADD</button>
    </form>
  );
}

export default TodoForm;
