import { createMuiTheme } from 'material-ui/styles';
import { red } from 'material-ui/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#0093ff',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff',
      contrastDefaultColor: 'light',
    },

    secondary: {
      50: '#fae7e2',
      100: '#f2c4b7',
      200: '#ea9d87',
      300: '#e27656',
      400: '#db5832',
      500: '#d53b0e',
      600: '#d0350c',
      700: '#ca2d0a',
      800: '#c42608',
      900: '#ba1904',
      A100: '#ffe5e3',
      A200: '#ffb6b0',
      A400: '#ff877d',
      A700: '#ff6f63',
      contrastDefaultColor: 'light',
    },
    grey: {
      50: '#fdfdfd',
      100: '#fafafa',
      200: '#f6f6f6',
      300: '#f2f2f2',
      400: '#f0f0f0',
      500: '#ededed',
      600: '#ebebeb',
      700: '#e8e8e8',
      800: '#e5e5e5',
      900: '#e0e0e0',
      A100: '#ffffff',
      A200: '#ffffff',
      A400: '#ffffff',
      A700: '#ffffff',
      contrastDefaultColor: 'dark',
    },
    error: red,
  },
});

export default muiTheme;
