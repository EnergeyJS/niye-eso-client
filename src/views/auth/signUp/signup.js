/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import { signUp } from '../../../store/actions/userAction';
import useStyles from './style';

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    username: '',
    mobileNumber: '',
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitSignUp = (event) => {
    event.preventDefault();
    signUp({ username: values.username, mobileNumber: values.mobileNumber, password: values.password });
  };

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={submitSignUp}>
        <TextField
          id="standard-name"
          label="User Name"
          name="username"
          variant="filled"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('username')}
          margin="normal"
          helperText="Test"
        />

        <TextField
          id="standard-name"
          label="Mobile Number"
          name="mobileNumber"
          variant="filled"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('mobileNumber')}
          margin="normal"
          helperText="Test"
        />

        <TextField
          id="filled-adornment-password"
          className={classes.textField}
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

        <TextField
          id="filled-adornment-password"
          className={classes.textField}
          variant="filled"
          type={values.showPassword ? 'text' : 'password'}
          label="Confirm Password"
          name="confirm_password"
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
        <Button type="submit" className={classes.button}>Submit</Button>
      </form>
    </div>
  );
}
