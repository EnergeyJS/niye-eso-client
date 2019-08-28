/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '40vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  closeModalIcon: {
    float: 'right',
    marginRight: theme.spacing(0),
    marginTop: '-1px',
    cursor: 'pointer',
  },
  root: {
    flexGrow: 1,
  },
  innerPaper: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
  },
  buttonPadding: {
    paddingBottom: theme.spacing(5 / 2),
    marginTop: '20px',
  },
  button: {
    width: '40%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cover: {
    display: 'block',
    position: 'relative',
    boxShadow: 'none',
  },
  coverTxt: {
    left: '40%',
    bottom: '-1vh',
    position: 'absolute',
    background: 'white',
    padding: '0 5%',
  },
}));

export default function SimpleModal({ open = false, closeModal }) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const classes = useStyles();
  const classModal = classes.paper;
  const [validationMessage, setvalidationMessage] = useState({
    validated: false,
    message: '',
  });

  const messages = {
    required: 'This field is required',
    email: 'Please enter a valid mobile number',
  };

  const validate = (event) => {
    console.log(`trm :${event.target.value.trim()}`);
    if (event.target.value.length === 0) {
      console.log(`test :${event.target.value}`);
      setvalidationMessage({ ...validationMessage, validated: true, message: messages.required });
      console.log(`afterValidation :${validationMessage.validated} : ${validationMessage.message}`);
    } else if (event.target.name === 'mobile') {
      console.log('here');
      const regex = /^[0][1][3-9][0-9][0-9](\d{6})$/;
      if (!regex.test(event.target.value)) {
        setvalidationMessage({ ...validationMessage, validated: true, message: messages.email });
      } else {
        setvalidationMessage({ ...validationMessage, validated: false, message: '' });
      }
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={closeModal}
      >
        <div style={modalStyle} className={`${classModal} modalWidth`}>
          <svg
            className={classes.closeModalIcon}
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41
            19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
          <Grid item xs={12}>
            <Typography variant="h6" id="modal-title">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <svg
                className={classes.closeModalIcon}
                onClick={closeModal}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path
                  id="Facebook"
                  d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805
                   c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,
                   19.321-17.354 c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,
                   0C155.878-0.004,158.081,72.48,158.081,83.3z"
                ></path>
              </svg>
              Sign Up or Login with Facebook
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <EmailOutlinedIcon />
              Login with Email
            </Button>
            <div className={classes.cover}>
              <hr />
              <div className={classes.coverTxt}>OR</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <form className={classes.form} noValidate>
              <TextField
                error={validationMessage.validated ? 'error' : ''}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="mobile"
                autoFocus
                onChange={validate}
                helperText={validationMessage.validated ? validationMessage.message : validationMessage.validated}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+88</InputAdornment>,
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </Grid>
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );
}
