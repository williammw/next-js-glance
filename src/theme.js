import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        p:{
          fontSize:20,
        },
        div:{
          color:'#3c4043',
        }
      },
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      "fontWeight": 100,
    },
    h2: {
      "fontWeight": 100,
    },
    h3: {
      "fontWeight": 100,
    },
    h4: {
      "fontWeight": 100,
    },
    h5: {
      "fontWeight": 100,
    },
    h6: {
      "fontWeight": 100,
    },
    p:{
      "lineHeight":0,
      "borderRadius": 3,
      "border": 0,
      "color": 'white',
    }
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;