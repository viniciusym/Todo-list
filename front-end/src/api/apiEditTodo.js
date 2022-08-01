import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'localhost';

const apiEditTodo = async (todoToEditId, editChanges) => {
  await axios.put(`http://${API_URL}:5000/todo/${todoToEditId}`, {
    description: editChanges,
  });
};

export default apiEditTodo;
