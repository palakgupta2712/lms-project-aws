import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#15202B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F7B860',
      contrastText: '#000',
    },
  },
});

export default theme