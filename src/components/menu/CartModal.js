import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


function getModalStyle () {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles (theme => ({
  paper: {
    position: 'absolute',
    width: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing (4),
    outline: 'none'
    },
  closeModalIcon: {
    float: 'right',
    marginRight: theme.spacing (-3),
    marginTop: theme.spacing (-3),
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
}));

export default function SimpleModal({open = false, closeModal, data = {}}) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState (getModalStyle);

  const [values, setValues] = useState ({
    age: '',
    name: 'hai',
  });

  function handleChange (event) {
    setValues (oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const classes = useStyles ();
  let classModal = classes.paper;
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}        
      >
        <div style={modalStyle} className={`${classModal} modalWidth`}>
          <Typography variant="h6" id="modal-title">
            <svg
              className={classes.closeModalIcon}
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            <div className={classes.innerRoot}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper
                    className={classes.innerPaper}
                    style={{boxShadow: 'none'}}
                  >
                    <img
                      className={`${classes.image} image`}
                      src="https://i.ibb.co/GPxRQhN/636379014-612x612.jpg"
                      alt="Nabwab"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper style={{boxShadow: 'none'}}>
                    <h3>Product Name</h3>
                    <span>Price</span><b>$135.5</b> <br />
                    <h2>Choose Options</h2>
                    <hr />
                    <h4>Color<span style={{color: 'red'}}>*</span></h4>

                    <FormControl className={classes.formControl}>
                      <Select
                        value={values.age}
                        onChange={handleChange}
                        displayEmpty
                        name="age"
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>Red</em>
                        </MenuItem>
                        <MenuItem value={10}>Green</MenuItem>
                        <MenuItem value={20}>Blue</MenuItem>
                        <MenuItem value={30}>White</MenuItem>
                      </Select>
                    </FormControl>
                  
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          style={{float: 'right'}}
                        >
                          Add To Cart
                        </Button>
                      
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Paper
                    className={classes.innerPaper}
                    style={{boxShadow: 'none'}}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </Paper>
                </Grid>

              </Grid>
            </div>
          </Typography>
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );
}
