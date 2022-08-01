import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'localhost';

const apiGetAllTodo = async () => {
  const response = await axios.get(`http://${API_URL}:5000/todo`);
  const { data } = response;

  return data;
};

export default apiGetAllTodo;
