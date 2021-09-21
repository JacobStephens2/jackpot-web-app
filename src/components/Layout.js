import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Head from './Head.js'
import Container from '@mui/material/Container';
import NavBar from '../components/NavBar'
import Typography from '@mui/material/Typography'

const Layout = ({ pageTitle, children }) => {
	return (
		<CssBaseline>
			<Head pageTitle={pageTitle}/>
			<Container>
				<NavBar />
				<Typography variant="h1" component="div" gutterBottom>
					{pageTitle}
				</Typography>
				{children}
			</Container>
		</CssBaseline>
	)
}

export default Layout