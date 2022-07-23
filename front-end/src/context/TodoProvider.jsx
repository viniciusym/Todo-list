import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(true);

  const providerValue = useMemo(() => ({
    todos,
    setTodos,
    update,
    setUpdate,
  }), [todos, update]);

  return (
    <TodoContext.Provider value={providerValue}>
      { children }
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;
