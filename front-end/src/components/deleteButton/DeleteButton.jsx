import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin4Line } from 'react-icons/ri';

function DeleteTodo({ deleteTodoFunction }) {
  return (
    <button
      type="button"
      onClick={() => deleteTodoFunction()}
    >
      <RiDeleteBin4Line />
    </button>
  );
}

DeleteTodo.propTypes = {
  deleteTodoFunction: PropTypes.func.isRequired,
};

export default DeleteTodo;
