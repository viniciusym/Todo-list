import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'localhost';

const apiChangeTodoState = async (todoToEditId, isTodoDone) => {
  await axios.put(`http://${API_URL}:5000/todo/${todoToEditId}`, {
    done: isTodoDone,
  });
};

export default apiChangeTodoState;
