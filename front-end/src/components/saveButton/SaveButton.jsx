import React from 'react';
import PropTypes from 'prop-types';
import { RiSaveLine } from 'react-icons/ri';
import styles from './saveButton.module.css';

function SaveButton({ saveEditingFunction }) {
  return (
    <button
      className={styles['save-button']}
      type="button"
      onClick={saveEditingFunction}
    >
      <RiSaveLine size="24px" color="white" />
    </button>
  );
}

SaveButton.propTypes = {
  saveEditingFunction: PropTypes.func.isRequired,
};

export default SaveButton;
