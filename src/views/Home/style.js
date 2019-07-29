/* eslint-disable*/
import { makeStyles } from '@material-ui/core/styles';
import imgUrl from '../../assests/images/Background_home.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    position: 'relative',
  },
  header: {
    flexGrow: 1,
    backgroundImage: `url(${imgUrl})`,
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  search: {
    position: 'absolute',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '16px',
    zIndex: 1,
    width: '50%',
    marginTop: '10px',
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),

    [theme.breakpoints.up('md')]: {
      width: 600,
    },
  },
  img: {
    // height: 300,
    width: '100%',
  },
  loveTitleHeader: {
    position: 'absolute',
    background: 'rgba(255,255,255,.8)',
    textAlign: 'center',
    borderBottom: '3px solid #fdd670',
    height: '60%',
    padding: 20,
    bottom: 0,
    right: 0,
    display: 'block',
    overflow: 'hidden',
  },
  LoveHeading: {
    color: 'black',
    fontSize: '20px',
    fontWeight: 400,
    margin: '0px 0 25px',
  },
}));

export default useStyles;
