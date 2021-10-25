import axios from 'axios'

const url = 'http://localhost:3000';

const getUsers = async () => await axios.get(url + '/users');

const getUser = async (id) => await axios.get(url + '/users/' + id);


export { getUsers, getUser }