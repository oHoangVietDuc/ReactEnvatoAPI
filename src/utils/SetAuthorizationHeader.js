import axios from 'axios';

export default (key = null) => {
  if (key) {
    axios.defaults.headers.common.authorization = `Bearer ${key}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
