import * as React from 'react'
import Layout from '../components/Layout'
import Dice from '../components/Dice'
import Chips from '../components/Chips'
import Rules from '../components/Rules'
import JackpotBoard from '../components/JackpotBoard.js'

const Jackpot = () => {
	return (
		<Layout pageTitle="Jackpot">
			<Rules
				description="This is a dice game described by Reiner Knizia in their book, Dice Games Properly Explained When you roll a number that corresponds to a space on the board with less than three chips, one of your chips goes to that space. 'If your result corresponds to a space with three counters, you win these three counters and take them from the board.' If you roll a 2, you place a chip on each space with less than three chips. If you roll a 12, you hit the jackpot and collect all chips from the board. When the first player loses their last chip, the player with the most chips wins."
			/>
			<Dice diceCount="2"/>
			<JackpotBoard />
			<Chips chipCount={15}/>
			<Chips chipCount={15}/>
			<Chips chipCount={15}/>
			<Chips chipCount={15}/>
		</Layout>
	)
}

export default Jackpot