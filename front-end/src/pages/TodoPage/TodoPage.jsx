import React, { useEffect, useContext } from 'react';
import TodoInputBar from '../../components/TodoInputBar/TodoInputBar';
import TodoContext from '../../context/TodoContext';
import TodoContainer from '../../components/TodoContainer/TodoContainer';
import styles from './TodoPage.module.css';
import apiGetAllTodo from '../../api/apiGetAllTodo';

function TodoPage() {
  const {
    setUpdate, todos, setTodos, update,
  } = useContext(TodoContext);

  useEffect(() => {
    const getTodos = async () => {
      const todosFromApi = await apiGetAllTodo();
      setTodos(todosFromApi);
      setUpdate(false);
    };
    if (update) getTodos();
  }, [update]);

  return (
    <div className={styles['main-container']}>
      <TodoInputBar />
      { todos.map((todo) => (
        <TodoContainer todo={todo} key={todo.id} />))}
    </div>
  );
}

export default TodoPage;
