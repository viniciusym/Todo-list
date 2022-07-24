import axios from 'axios';
import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

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
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        type="button"
        onClick={() => addNewTodo(todoInput)}
      >
        add
      </button>
    </div>
  );
}

export default TodoInputBar;
