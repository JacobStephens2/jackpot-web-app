import * as React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

class DiceClass extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			rollResult : '',
			rollHistory: [],
			rollHistoryString: ''
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
		this.setState({
			rollHistory: this.state.rollHistory.concat(result)
		})
		if (this.state.rollHistoryString === '') {
			this.setState({
				rollHistoryString: result
			})
		} else {
			this.setState({
				rollHistoryString: this.state.rollHistoryString + ', ' + result
			})
		}
	}

	render() {
	  return (
		<div>
			<Button 
				variant="contained"
				onClick={() => {
					this.rollDice();
				}}
			>
				Roll {this.props.diceCount}D{this.props.diceSidesCount}
			</Button>
			<Typography variant="body1">
				Roll result: {this.state.rollResult}
			</Typography>
			<Typography variant="body1">
				Roll history: {this.state.rollHistoryString}
			</Typography>
			
			{/* Test states button */}
			<Button 
				variant="contained"
				onClick={() => {
					console.log(
						"rollResult: " + this.state.rollResult + 
						': ' + typeof this.state.rollResult + 
						': Array? ' + Array.isArray(this.state.rollResult)
					);
					console.log(
						"rollHistory: " + this.state.rollHistory + 
						': ' + typeof this.state.rollHistory +
						': Array? ' + Array.isArray(this.state.rollHistory) +
						': ArrayLength? ' + this.state.rollHistory.length
					);
					console.log(
						"rollHistoryString: " + this.state.rollHistoryString + 
						': ' + typeof this.state.rollHistoryString +
						': Array? ' + Array.isArray(this.state.rollHistoryString)
					);
				}}
			>
				Log states
			</Button>
		</div>
	  );
	}
  };

export default DiceClass