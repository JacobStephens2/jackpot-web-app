import * as React from 'react'
import {useState} from 'react';
import Button from '@mui/material/Button';


const Dice = (props) => {
	const [roll, setRoll] = useState( 1 );

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
			{props.diceCount}D{props.diceSidesCount} roll result: {roll}
			<br />
			<Button 
				variant="contained"
				onClick={() => {
					setRoll(rollDice());
				}}
			>
				Roll Dice
			</Button>
		</div>
	)
}

export default Dice


