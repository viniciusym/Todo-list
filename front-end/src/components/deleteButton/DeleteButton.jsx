import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin4Line } from 'react-icons/ri';
import styles from './deleteButton.module.css';

function DeleteTodo({ deleteTodoFunction }) {
  return (
    <button
      className={styles['delete-button']}
      type="button"
      onClick={() => deleteTodoFunction()}
    >
      <RiDeleteBin4Line size="24px" color="#D65A31" />
    </button>
  );
}

DeleteTodo.propTypes = {
  deleteTodoFunction: PropTypes.func.isRequired,
};

export default DeleteTodo;
