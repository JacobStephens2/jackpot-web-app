import * as React from 'react'

const Dice = (props) => {
	
	function rollDice() {
		var number = (Math.floor(Math.random() * (props.diceSidesCount - 1 + 1)) + 1);
		var i = 1;
		while (i < props.diceCount) {
			number = number + (Math.floor(Math.random() * (props.diceSidesCount - 1 + 1)) + 1);
			i++;
		}
		return number;
	}

	return (
		<div>
			<p>{props.diceCount}D{props.diceSidesCount} roll result: {rollDice()}</p>
		</div>
	)
}

export default Dice


