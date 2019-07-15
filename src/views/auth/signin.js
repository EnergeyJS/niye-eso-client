/* eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
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
    flexDirection:'column',
    alignItems:'center',
    boxShadow: '0 0 10px 0px '+theme.palette.primary.main
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,    
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  checkbox:{
      '&>span>svg':{
          color:theme.palette.primary.main
        }
    },
    button:{
        background:theme.palette.primary.main
  }
}));

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
  const handleChange = name => event => {
      console.log(event.target.name);
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"
        name="nam"
        className={classes.textField}
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
      />
      <FormControl className={`classes.margin`, `classes.textField`}>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          id="adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" 
              onClick={handleClickShowPassword} className={classes.checkbox}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div>
      <Checkbox value="checkedA" inputProps={{ "aria-label": "Checkbox A" }} className={classes.checkbox} />
      Keep me logged in
      </div>
      <Button className={classes.button}>
          Submit
       </Button>
    </form>
    </div>
  );
}
