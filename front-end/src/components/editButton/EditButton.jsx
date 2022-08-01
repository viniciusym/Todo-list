import React from 'react';
import PropTypes from 'prop-types';
import { RiEditLine } from 'react-icons/ri';

function EditButton({ startEditingFunction }) {
  return (
    <button
      type="button"
      onClick={() => startEditingFunction()}
    >
      <RiEditLine />
    </button>
  );
}

EditButton.propTypes = {
  startEditingFunction: PropTypes.func.isRequired,
};

export default EditButton;
