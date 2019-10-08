/* eslint-disable no-unused-vars */
import React from 'react';
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
    // eslint-disable-next-line no-console
    console.log(event.target.name);
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <form className={classes.container} noValidate autoComplete='off'>
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
        <Button className={classes.button}>Submit</Button>
      </form>
    </div>
  );
}
