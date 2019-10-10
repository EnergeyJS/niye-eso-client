import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { signIn } from '../../../store/actions/authAction';
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
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const sigIn = (event) => {
    event.preventDefault();
    signIn({ username: values.username, password: values.password });
  };

  return (
    <div>
      <form className={classes.container} noValidate autoComplete='off' onSubmit={sigIn}>
        <TextField
          id='standard-name'
          label='User'
          name='username'
          variant="filled"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('username')}
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
