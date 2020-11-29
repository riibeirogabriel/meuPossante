import axios from 'axios';

const baseURL = 'http://fipeapi.appspot.com/api/1/carros/';

export default axios.create({ baseURL });
