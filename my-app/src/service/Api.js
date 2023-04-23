import axios from 'axios';

axios.defaults.baseURL = "https://6442a81533997d3ef9164aca.mockapi.io";

const BASE_URL="https://6442a81533997d3ef9164aca.mockapi.io/users"


export const getUsers = async () => {
    const data = await axios.get(`${BASE_URL}/users`);
    return data;
  };

