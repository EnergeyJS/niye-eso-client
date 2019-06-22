import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
  palette: {
    primary: {
    light: '#757ce8',
    main:  '#2196f3',
    dark: '#002884',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff7961',
    main: '#f57c00',
    dark: '#ba000d',
    contrastText: '#000',
  }
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        '&:hover': {
          backgroundColor: 'purple'
        }
      }
    },
    MuiDrawer: {
        paper:{
          color:'white',
          backgroundColor: '#2196f3'
        }
      },
      MuiSvgIcon:{
        root:{color:'white'}
      },
      MuiMenu:{
        paper:{
          backgroundColor: '#2196f3',
          color:'white'
        }
      }
    }
});