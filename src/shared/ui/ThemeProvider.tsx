import { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
