import * as React from 'react'

const D6 = (props) => {
	
	function rollDice() {
		var number = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
		var i = 1;
		while (i < props.numberOfDice) {
			number = number + (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
			i++;
		}
		return number;
	}

	return (
		<div>
			<p>{props.numberOfDice}D6 roll result: {rollDice()}</p>
		</div>
	)
}

export default D6


