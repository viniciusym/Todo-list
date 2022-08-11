import React, { useEffect, useContext } from 'react';
import TodoInputBar from '../../components/TodoInputBar/TodoInputBar';
import TodoContext from '../../context/TodoContext';
import TodoContainer from '../../components/TodoContainer/TodoContainer';
import styles from './TodoPage.module.css';
import apiGetAllTodo from '../../api/apiGetAllTodo';
import apiDeleteTodo from '../../api/apiDeleteTodo';
import StyledDeleteDoneTodosButton from '../../components/styledComponents/StyledDeleteDoneTodosButton';

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

  const handleDeleteDoneTodosButton = async () => {
    const doneTodos = todos.filter((todo) => todo.done);

    const deleteTodosPromises = doneTodos.map((todo) => apiDeleteTodo(todo.id));
    await Promise.all(deleteTodosPromises);
    setUpdate(true);
  };

  return (
    <div className={styles['main-container']}>
      <TodoInputBar />
      <div className={styles['main-container-todo-containers']}>
        {todos.map((todo) => (
          <TodoContainer todo={todo} key={todo.id} />))}
      </div>
      <StyledDeleteDoneTodosButton onClick={handleDeleteDoneTodosButton}>
        clear done tasks
      </StyledDeleteDoneTodosButton>
    </div>
  );
}

export default TodoPage;
