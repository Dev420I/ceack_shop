import { ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7cb342',
    },
    secondary: {
      main: '#fdd835',
    },
  },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
