import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Head from './Head.js'
import Container from '@mui/material/Container';
import NavBar from '../components/NavBar'
import Typography from '@mui/material/Typography'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          margin: '0 0 0.7rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '0 0 0.5rem'
        }
      }
    }
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const Layout = ({ pageTitle, children }) => {
	return (
		<CssBaseline>
      <ThemeProvider theme={theme}>
			<Head pageTitle={pageTitle}/>
        <Container>
          <NavBar />
          <Typography variant="h1" component="div" gutterBottom>
            {pageTitle}
          </Typography>
          {children}
        </Container>
      </ThemeProvider>
		</CssBaseline>
	)
}

export default Layout