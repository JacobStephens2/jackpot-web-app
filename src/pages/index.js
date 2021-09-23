import * as React from 'react'
import Layout from '../components/Layout'
import Typography from '@mui/material/Typography'



const IndexPage = () => {
  return (
    <Layout pageTitle="The Game Well Played">
      <Typography variant="subtitle1" component="div" gutterBottom>
      This is a web app for playing board games.
      </Typography>
      <Typography variant="h2" component="div" gutterBottom>
      About this app
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
				Hello! My name is Jacob Stephens, and I created this progressive web app to make more board and card games available to play digitally. The app is named after Bernard De Koven's book of the same name. <a target="_blank" rel="noreferrer" href="https://mitpress.mit.edu/books/well-played-game"><i>The Well Played Game</i></a> has shaped my play philosophy. The ideas got me to stop bargaining with others for play time. Authentic play requires total volition.
			</Typography>
    </Layout>
  )
}

export default IndexPage