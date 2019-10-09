import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';

import useStyles from './style';

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const sigin = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', {
      username: 'Nuruzzaman Khan',
      password: '123456',
    }).then((result) => {
      const { data } = result;
      // eslint-disable-next-line no-undef
      localStorage.setItem('Token', `Bearer ${data.token}`);
    });
  };

  return (
    <div>
      <form className={classes.container} noValidate autoComplete='off' onSubmit={sigin}>
        <TextField
          id='standard-name'
          label='Email'
          name='Email'
          variant="filled"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin='normal'
          helperText='Test'
        />

        <TextField
        id="filled-adornment-password"
        className={ classes.textField }
        variant="filled"
        type={values.showPassword ? 'text' : 'password'}
        label="Password"
        name="password"
        value={values.password}
        onChange={handleChange('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
        <div>
          <Checkbox
            value='checkedA'
            inputProps={{ 'aria-label': 'Checkbox A' }}
            className={classes.checkbox}
          />
          Keep me logged in
        </div>
        <Button type="submit" className={classes.button}>Submit</Button>
      </form>
    </div>
  );
}
