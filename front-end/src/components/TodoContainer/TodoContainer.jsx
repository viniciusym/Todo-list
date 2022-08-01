import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TodoContext from '../../context/TodoContext';
import styles from './todoContainer.module.css';
import apiDeleteTodo from '../../api/apiDeleteTodo';
import apiEditTodo from '../../api/apiEditTodo';
import SaveButton from '../saveButton/SaveButton';
import DeleteTodo from '../deleteButton/DeleteButton';
import EditButton from '../editButton/EditButton';

function TodoContainer({ todo }) {
  const { description, createdAt, id } = todo;
  const [edit, setEdit] = useState({
    editing: false,
    todo: {},
    changes: '',
  });
  const { setUpdate } = useContext(TodoContext);

  const deleteTodo = async () => {
    await apiDeleteTodo(id);
    setUpdate(true);
  };

  const startEditing = () => {
    setEdit({
      editing: true,
      todo,
    });
  };

  const saveEditing = async () => {
    await apiEditTodo(id, edit.changes);
    setEdit({ editing: false, todo: {} });
    setUpdate(true);
  };

  const handleEditInput = (value) => {
    setEdit((prevState) => ({
      ...prevState,
      changes: value,
    }));
  };

  return (
    <div id={id}>
      {edit.editing ? (
        <div className={styles['todo-container']}>
          <input
            type="text"
            onChange={({ target }) => handleEditInput(target.value)}
            defaultValue={edit.todo.description}
            value={edit.changes}
          />
          <SaveButton saveEditingFunction={saveEditing} />
        </div>
      ) : (
        <div className={styles['todo-container']}>
          <div>
            <p>{description}</p>
            <p>{createdAt}</p>
          </div>
          <div>
            <DeleteTodo deleteTodoFunction={deleteTodo} />
            <EditButton startEditingFunction={startEditing} />
          </div>
        </div>
      )}
    </div>
  );
}

TodoContainer.propTypes = {
  todo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default TodoContainer;
