import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TodoContext from '../context/TodoContext';

function TodoContainer({ todo }) {
  const { description, createdAt, id } = todo;
  const [edit, setEdit] = useState({
    editing: false,
    todo: {},
    changes: '',
  });
  const { setUpdate } = useContext(TodoContext);

  const API_URL = process.env.REACT_APP_API_URL || 'localhost';

  const deleteTodo = async (todoId) => {
    await axios.delete(`http://${API_URL}:5000/todo/${todoId}`);
    setUpdate(true);
  };

  const startEditing = (todoToEdit) => {
    setEdit({
      editing: true,
      todo: todoToEdit,
    });
  };

  const saveEditing = async (todoId, editChanges) => {
    await axios.put(`http://${API_URL}:5000/todo/${todoId}`, {
      description: editChanges,
    });
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
      { edit.editing ? (
        <div>
          <input
            type="text"
            onChange={({ target }) => handleEditInput(target.value)}
            defaultValue={edit.todo.description}
            value={edit.changes}
          />
          <button
            type="button"
            onClick={() => saveEditing(id, edit.changes)}
          >
            save
          </button>
        </div>
      ) : (
        <div>
          <p>{ description }</p>
          <p>{ createdAt }</p>
          <button
            type="button"
            onClick={() => deleteTodo(id)}
          >
            delete
          </button>
          <button
            type="button"
            onClick={() => startEditing(todo)}
          >
            edit
          </button>
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
