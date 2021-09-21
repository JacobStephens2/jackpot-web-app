import * as React from 'react'
import {useState} from 'react';
import Button from '@mui/material/Button';


const Dice = (props) => {
	const [rollResult, setRollResult] = useState( 0 );
	const [countOfRolls, setCountOfRolls] = useState( 0 );
	const [arrayOfRolls, setArrayOfRolls] = useState([]);
	const [stringOfRolls, setStringOfRolls] = useState( '' );
	const [averageRoll, setAverageRoll] = useState( 0 );
	const [sumOfRolls, setSumOfRolls] = useState( 0 );

	function rollDice() {
		var result = (Math.floor(Math.random() * (props.diceSidesCount - 1 + 1)) + 1);
		var i = 1;
		while (i < props.diceCount) {
			result = result + (Math.floor(Math.random() * (props.diceSidesCount - 1 + 1)) + 1);
			i++;
		}
		findAverage(result);
		setCountOfRolls(countOfRolls + 1);
		addToRollsList(result);
		setRollResult(result);
		setArrayOfRolls(arrayOfRolls => [...arrayOfRolls, result]);
		console.log("countOfRolls: " + countOfRolls + ', ' + typeof countOfRolls);
		console.log("stringOfRolls: " + stringOfRolls + ', ' + typeof stringOfRolls);
		console.log("averageRoll: " + averageRoll + ', ' + typeof averageRoll);
		console.log("rollResult: " + rollResult + ', ' + typeof rollResult);
		console.log("sumOfRolls: " + sumOfRolls + ', ' + typeof sumOfRolls);
		console.log("arrayOfRolls: " + arrayOfRolls + ', ' + typeof arrayOfRolls);				
	}
	
	function addToRollsList(result) {
		if(countOfRolls === 0) {
			setStringOfRolls(arrayOfRolls.concat(result));
		} else {
			setStringOfRolls(stringOfRolls.concat(', ' + result));
		}
	}

	function findAverage(result) {
		setSumOfRolls( sumOfRolls + result );
		setAverageRoll(  sumOfRolls / countOfRolls );
	}

	return (
		<div>
			{props.diceCount}D{props.diceSidesCount} roll result: {rollResult}
			<br />
			Count of dice rolls: {countOfRolls}
			<br />
			Dice rolls: {stringOfRolls}
			<br />
			Average roll: {averageRoll}
			<br />
			<Button 
				variant="contained"
				onClick={() => {
					rollDice();
				}}
			>
				Roll Dice
			</Button>
		</div>
	)
}

export default Dice


