import * as React from 'react'
import Layout from '../components/Layout'
import Typography from '@mui/material/Typography'
import Dice from '../components/Dice.js'
import Chips from '../components/Chips.js'

const Jackpot = () => {
	return (
		<Layout pageTitle="Jackpot">
			<Typography variant="body1">
				This is a dice game described by Reiner Knizia in their book, <i>Dice Games Properly Explained.</i> When you roll a 3, one of your chips goes to the pot. When you roll a 6, you get all the chips in the&nbsp;pot.
			</Typography>
			<Dice />
			<Chips chipCount="15"/>
		</Layout>
	)
}

export default Jackpot