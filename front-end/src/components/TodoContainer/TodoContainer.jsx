import React, { useContext, useState, memo } from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import TodoContext from '../../context/TodoContext';
import styles from './todoContainer.module.css';
import apiDeleteTodo from '../../api/apiDeleteTodo';
import apiEditTodo from '../../api/apiEditTodo';
import SaveButton from '../saveButton/SaveButton';
import DeleteTodo from '../deleteButton/DeleteButton';
import EditButton from '../editButton/EditButton';
import apiChangeTodoState from '../../api/apiChangeTodoState';

function TodoContainer({ todo }) {
  const { setUpdate } = useContext(TodoContext);
  const {
    description, createdAt, id,
  } = todo;
  const [edit, setEdit] = useState({
    editing: false,
    todo: {},
    changes: '',
  });
  const formatedDateTime = dateFormat(createdAt, 'mm/dd/yyyy HH:MM:ss');

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

  const changeTodoState = async (isDone) => {
    await apiChangeTodoState(id, isDone);
    setUpdate(true);
  };

  return (
    <div id={id}>
      {edit.editing ? (
        <div className={styles['todo-container']}>
          <input
            type="text"
            className={styles['todo-container-edit-input']}
            onChange={({ target }) => handleEditInput(target.value)}
            defaultValue={edit.todo.description}
            value={edit.changes}
          />
          <SaveButton saveEditingFunction={saveEditing} />
        </div>
      ) : (
        <div
          className={styles['todo-container']}
        >
          <div>
            <input
              type="checkbox"
              onChange={(e) => changeTodoState(e.target.checked)}
            />
            <div>
              <p className={styles['todo-container-description']}>
                {description}
              </p>
              <p className={styles['todo-container-date']}>
                {formatedDateTime}
              </p>
            </div>
          </div>
          <div className={styles['todo-container-button']}>
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
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default memo(TodoContainer);
