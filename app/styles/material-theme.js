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
