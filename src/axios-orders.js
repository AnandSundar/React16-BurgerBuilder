import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e74fa.firebaseio.com/'
});

export default instance;