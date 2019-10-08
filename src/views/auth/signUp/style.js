
import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;
