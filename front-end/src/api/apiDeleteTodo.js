import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'localhost';

const apiDeleteTodo = async (todoToDeleteId) => {
  await axios.delete(`http://${API_URL}:5000/todo/${todoToDeleteId}`);
};

export default apiDeleteTodo;
