import * as React from 'react'
import Layout from '../components/Layout'
import Typography from '@mui/material/Typography'
import Dice from '../components/Dice.js'

const DiceGame = () => {
	return (
		<Layout pageTitle="Dice Game">

			<Typography variant="body1" component="div" gutterBottom>
				This is a dice game.
				<Dice diceCount="2" diceSidesCount="6" />
			</Typography>
		
		</Layout>
	)
}

export default DiceGame