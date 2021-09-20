import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
    interface ThemeOptions {    
        themeName?: string  // optional
    }
}

const palette = {
  primary: { main: '#ededed' },
  secondary: { main: '#7cc78d' },
  error: {main: '#c93131'},
  text: {primary: '#707070', secondary: '#7cb3c7'},
  background: {default: '#ededed'},
  success: {main: '#7cb3c7'}
};

const typography= {
  fontFamily: [
    "Lato",
    "Montserrat",
    "Work Sans",
    "serif"
  ].join(","),
  allVariants: {
    color: '#707070'
  }
}

export default createTheme({ palette, typography });