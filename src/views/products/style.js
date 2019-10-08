import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cover: {
    display: 'block',
    position: 'relative',
    boxShadow: 'none',
  },
  coverPhotoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  coverPhoto: {
    width: '20vw',
    height: 'auto',
    margin: 'auto',
  },
  coverTxt: {
    left: '35vw',
    bottom: '-1vh',
    position: 'absolute',
    background: 'white',
    padding: '0 5vw',
  },
}));

export default useStyles;
