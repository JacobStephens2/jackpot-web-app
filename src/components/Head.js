import * as React from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Helmet from 'react-helmet'
import '../style.css'


const Head = ({pageTitle}) => {
	return (
		<Helmet>
			<html lang="en" amp />
			<title>{pageTitle}</title>
			<meta 
				name="viewport"
				content="initial-scale=1"
				width="device-width"
			/>
		</Helmet>
	)
}	

export default Head
