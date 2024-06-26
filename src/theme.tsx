// theme.tsx
import { DefaultTheme } from 'styled-components';

// Define your theme interface
export interface ThemeInterface extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    primaryAccent: string;
    secondaryAccent: string;
    tertiaryAccent: string;
    background: string;
    text: string;
    textSecondary: string;
    link: string;
    linkHover: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  fonts: {
    base: string;
    secondary: string;
  };
  fontSizes: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  breakpoints: {
    min: string;
    mobile: string;
    tablet: string;
    desktop: string;
    largeScreen: string;
    widescreen: string;
  };
  spacing: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  borderRadius: string;
}

// Define your theme values
export const theme: ThemeInterface = {
  colors: {
    primary: '#F2F2F2',
    secondary: '#FFFFFF',
    primaryAccent: '#639CBF',
    secondaryAccent: '#fff0d1',
    tertiaryAccent: '#260101',
    background: '#639CBF',
    text: '#260101',
    textSecondary: '#ffffff',
    link: '#007bff',
    linkHover: '#0056b3',
    border: '#dee2e6',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
  },
  fonts: {
    base: 'Lora, monospace, Helvetica, Arial, sans-serif',
    secondary: 'Lora'
  },
  fontSizes: {
    xsmall: '0.4rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.5rem',
  },
  breakpoints: {
    min: '350px',
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeScreen: '1919px',
    widescreen: '1920px',
  },
  spacing: {
    xsmall: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '3rem',
  },
  borderRadius: '0.25rem',
};

// Export the theme for use in your application
export default theme;
