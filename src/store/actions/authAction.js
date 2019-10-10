import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const signIn = ({ username, password } = {}) => {
  axios.post('/api/auth/login', {
    username,
    password,
  }).then((result) => {
    const { data } = result;
    // eslint-disable-next-line no-undef
    localStorage.setItem('Token', `Bearer ${data.token}`);
  });
};
