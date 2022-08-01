import React from 'react';
import PropTypes from 'prop-types';
import { RiSaveLine } from 'react-icons/ri';

function SaveButton({ saveEditingFunction }) {
  return (
    <button
      type="button"
      onClick={saveEditingFunction}
    >
      <RiSaveLine />
    </button>
  );
}

SaveButton.propTypes = {
  saveEditingFunction: PropTypes.func.isRequired,
};

export default SaveButton;
