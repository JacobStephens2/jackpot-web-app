import * as React from 'react'
import Layout from '../components/Layout'
import Typography from '@mui/material/Typography'
import Dice from '../components/Dice.js'

const Jackpot = () => {
	return (
		<Layout pageTitle="Jackpot">
			<Typography variant="body1" component="div" gutterBottom>
				Roll the dice to see the results.
				<Dice diceCount="2" diceSidesCount="6" />
			</Typography>
		</Layout>
	)
}

export default Jackpot