import React from 'react';
import TodoContext from './TodoContext';
import PropTypes from 'prop-types';

function TodoProvider({ children }) {
  return (
    <TodoContext.Provider>
      { children }
    </TodoContext.Provider>
  )
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;