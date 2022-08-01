import React from 'react';
import PropTypes from 'prop-types';
import { RiEditLine } from 'react-icons/ri';
import styles from './editButton.module.css';

function EditButton({ startEditingFunction }) {
  return (
    <button
      className={styles['edit-button']}
      type="button"
      onClick={() => startEditingFunction()}
    >
      <RiEditLine size="24px" />
    </button>
  );
}

EditButton.propTypes = {
  startEditingFunction: PropTypes.func.isRequired,
};

export default EditButton;
