import * as React from 'react'
import Button from '@mui/material/Button';

class DiceClass extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		rollResult : 0,
		rollResultHistory: ['apple', 'banana']
	  }
	  this.rollDice = this.rollDice.bind(this);
	}

	rollDice() {
		var result = (Math.floor(Math.random() * (this.props.diceSidesCount - 1 + 1)) + 1);
		var i = 1;
		while (i < this.props.diceCount) {
			result = result + (Math.floor(Math.random() * (this.props.diceSidesCount - 1 + 1)) + 1);
			i++;
		}
		this.setState({
			rollResult: result
		})
	}


	render() {
	  return (
		<div>
			{this.props.diceCount}D{this.props.diceSidesCount} roll result: {this.state.rollResult}
			<br />
			<Button 
				variant="contained"
				onClick={() => {
					this.rollDice();
				}}
			>
				Roll Dice
			</Button>
			<br />
			<br />
			<Button 
				variant="contained"
				onClick={() => {
					console.log("rollResult: " + this.state.rollResult + ': ' + typeof this.state.rollResult + ': Array? ' + Array.isArray(this.state.rollResult));
					console.log("rollResultHistory: " + this.state.rollResultHistory + ': Array? ' + Array.isArray(this.state.rollResultHistory));
				}}
			>
				Log states
			</Button>
		</div>
	  );
	}
  };

export default DiceClass