import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
  palette: {
    primary: {
    light: '#757ce8',
    main:  '#663399',
    dark: '#002884',
    contrastText: '#fff',
    overlay:'rgba(102, 51, 153, 0.73)'
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
          backgroundColor: '#663399'
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
      },
      MuiCard:{
        root:{
          maxWidth:'300px',
          display:'inline-block',
          position:'relative',
          margin:'5px',
          '&:hover': {
            boxShadow:'2px 3px 10px 1px gray'
          },
          '& div.discount':{            
            position:'absolute',
            right:'0',
            top:'0',
            borderRight:'solid 40px #f57c00',
            borderTop:'solid 40px #f57c00',
            borderBottom:'solid 40px transparent',
            borderLeft:'solid 40px transparent',
            '& span':{
              position:"absolute",
              transform: 'rotate(45deg)',
              top: "-20px",
              left: "1px",
              color:'white'
            }
          }
        }
      }
    }
});