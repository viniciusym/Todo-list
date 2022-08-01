import axios from 'axios';
import React, { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
import styles from './TodoInputBar.module.css';

function TodoInputBar() {
  const [todoInput, setTodoInput] = useState('');
  const { setUpdate } = useContext(TodoContext);

  const API_URL = process.env.REACT_APP_API_URL || 'localhost';

  const addNewTodo = async (todo) => {
    await axios.post(`http://${API_URL}:5000/todo`, {
      description: todo,
    });
    setTodoInput('');
    setUpdate(true);
  };

  return (
    <div className={styles['todo-input-container']}>
      <input
        type="text"
        value={todoInput}
        className={styles['todo-input']}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        type="button"
        className={styles['todo-input-button']}
        onClick={() => addNewTodo(todoInput)}
      >
        add
      </button>
    </div>
  );
}

export default TodoInputBar;
