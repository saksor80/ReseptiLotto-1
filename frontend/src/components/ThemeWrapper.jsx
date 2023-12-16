import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme for Material-UI components
const theme = createTheme({
    palette: {
        primary: {
          main: '#00687b', // Main primary color
          onPrimary: '#ffffff',
        },
        secondary: {
          main: '#4b6269', // Main secondary color
          onSecondary: '#ffffff',
        },
        tertriary: {
            main: '#585c7e',
            onTertriary: '#ffffff'
        },
        error: {
          main: '#ba1a1a',
          onError: '#ffffff',
        },
        warning: {
          main: '#ff9800',
        },
        info: {
          main: '#2196f3',
        },
        success: {
          main: '#4caf50',
        },
        background: {
          default: '#2B8191', // Background color of the app
          onBackground: '#191c1d', // Custom background color for containers
        },
        text: {
          primary: '#333333', // Primary text color
          onContainer: '#000000', // Custom text color on container background
        },
        outline: {
            main: '#70787c',
        },
    },
});

// ThemeWrapper component to provide the custom theme to its children
function ThemeWrapper({ children }) {
  // Wrapping children with the ThemeProvider to apply the theme
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeWrapper;