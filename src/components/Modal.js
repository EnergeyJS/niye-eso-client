import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
const top = rand();
  const left =  rand();
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {    
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    position:'relative',
    transform: `translate(20%, 15%)`,
    maxWidth: '70%',
    marginBottom:theme.spacing(4),
    borderTop: 'solid 27px #403f3d8c',
    borderRadius: '11px',
  },
  modal: {    
    padding: theme.spacing(4),
    outline: 'none',
    overflow:'initial',
    display:'block',
    position:'relative'
  },
  modalContainer: {    
    overflow:'auto'    
  },
  close:{
    top: '-24px',
    backgroundColor: '#ff0000b8',
    color: '#f8f9fa',
    right: '3px',
    position: 'absolute',
    fontSize: '10px',
    fontWeight: '900',
    display: 'block',
    borderRadius: '50%',
    borderColor:'#ff0000b8',
    textAlign: 'center',
    '&:hover':{
       boxShadow: '-1px 1px 7px 1px #007bff',
       'pointer':'mouse'
    }
    
  }
}));

export default function SimpleModal({open = false, closeModal, data={}}) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  console.log(data);

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={closeModal}
        className={classes.modalContainer}
      >
        <div  className={classes.modal}>
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Text in a modal
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. {data.name}
          </Typography>
          <button className={classes.close} onClick={closeModal}>×</button>
          {/* <SimpleModal /> */}
        </div>
        </div>
      </Modal>
    </div>
  );
}
