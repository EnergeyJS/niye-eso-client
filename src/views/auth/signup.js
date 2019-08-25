/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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

const useStyles = makeStyles(theme => ({
  container: {
    margin: '10vh',
    padding: '10vh',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40vw',
    margin: '10px 0',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  checkbox: {
    '&>span>svg': {
      color: theme.palette.primary.main,
    },
  },
  button: {
    background: theme.palette.primary.main,
    marginTop: '20px',
  },
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [validationMessage, setvalidationMessage] = useState({
    validated: false,
    message: '',
  });

  const messages = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
  };

  const validate = (event) => {
    // eslint-disable-next-line no-console
    console.log(`trm :${event.target.value.trim()}`);
    if (event.target.value.length === 0) {
      // eslint-disable-next-line no-console
      console.log(`test :${event.target.value}`);
      setvalidationMessage({ ...validationMessage, validated: true, message: messages.required });
      console.log(`afterValidation :${validationMessage.validated} : ${validationMessage.message}`);
    } else if (event.target.name === 'Email') {
      console.log('here');
      // eslint-disable-next-line
      const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!regex.test(event.target.value)) {
        setvalidationMessage({ ...validationMessage, validated: true, message: messages.email });
      }
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = name => (event) => {
    // eslint-disable-next-line no-console
    console.log(event.target.name);
    setValues({ ...values, [name]: event.target.value });
    validate(event);
  };

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          error={validationMessage.validated ? 'error' : ''}
          id="standard-name"
          label="Email"
          name="Email"
          variant="filled"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          helperText={validationMessage.validated ? validationMessage.message : validationMessage.validated}
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
          id="filled-adornment-confirm_password"
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
        <Button className={classes.button}>Submit</Button>
      </form>
    </div>
  );
}
