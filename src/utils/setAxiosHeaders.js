import axios from 'axios';


const setAxiosHeaders = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common['Authorization'];
      }
}

export default setAxiosHeaders
