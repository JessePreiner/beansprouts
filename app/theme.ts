'use client'
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0c847e',
    },
    secondary: {
      main: grey.A700,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
