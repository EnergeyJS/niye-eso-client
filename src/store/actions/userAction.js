import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const signUp = ({ username, mobileNumber, password } = {}) => {
  axios.post('/api/users', {
    username,
    mobileNumber,
    password,
  }).then((result) => {
    const { data } = result;
    // eslint-disable-next-line no-undef
    console.log(data);
  });
};
