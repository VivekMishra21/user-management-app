import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const getAllUsers = () => axios.get(`${BASE_URL}/users`);
export const getUserById = (id) => axios.get(`${BASE_URL}/user/${id}`);
export const createUser = (user) => axios.post(`${BASE_URL}/user`, user);
export const updateUser = (id, user) => axios.put(`${BASE_URL}/user/${id}`, user);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/user/${id}`);
export const findByPhoneNumber = (phoneNumber) => axios.get(`${BASE_URL}/user/phoneNumber/${phoneNumber}`);
export const findByName = (name) => axios.get(`${BASE_URL}/user/name/${name}`);
export const getTodayRegisteredUsers = () => axios.get(`${BASE_URL}/user/registered-today`);
