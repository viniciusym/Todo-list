import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import TodoInputBar from '../components/TodoInputBar';
import TodoContext from '../context/TodoContext';
import TodoContainer from '../components/TodoContainer';

function TodoPage() {
  const {
    setUpdate, todos, setTodos, update,
  } = useContext(TodoContext);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get('http://localhost:5000/todo');
      const { data } = response;
      setTodos(data);
      setUpdate(false);
    };
    if (update) getTodos();
  }, [update]);

  return (
    <div>
      <TodoInputBar />
      { todos.map((todo) => (
        <TodoContainer todo={todo} key={todo.id} />))}
    </div>
  );
}

export default TodoPage;
