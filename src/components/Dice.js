import * as React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

class Dice extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			rollResult : '',
			rollHistoryArray: [],
			rollHistoryString: '',
			rollAverage: ''
	  }
	  this.rollDice = this.rollDice.bind(this);
	  this.findAverage = this.findAverage.bind(this);
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
			rollHistoryArray: this.state.rollHistoryArray.concat(result)
		}, () => {
			this.findAverage();
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

	findAverage() {
		var total = 0;
		for(var i = 0; i < this.state.rollHistoryArray.length; i++) {
			total += this.state.rollHistoryArray[i];
		}
		this.setState({
			rollAverage: (total / this.state.rollHistoryArray.length).toFixed(2)
		})
	}

	clearResults() {
		this.setState({
			rollResult : '',
			rollHistoryArray: [],
			rollHistoryString: '',
			rollAverage: ''
		})
	}

	render() {
	  return (
		<div>
			<Typography variant="body1">
				Roll result: {this.state.rollResult}
			</Typography>
			<Typography variant="body1">
				Roll history: {this.state.rollHistoryString}
			</Typography>
			<Typography variant="body1">
				Roll average: {this.state.rollAverage}
			</Typography>

			<Button 
				variant="contained"
				onClick={() => {
					this.rollDice();
				}}
			>
				Roll {this.props.diceCount}D{this.props.diceSidesCount}
			</Button>

			&ensp;

			<Button 
				variant="contained"
				onClick={() => {
					this.clearResults();
				}}
			>
				Clear
			</Button>

			<br />
		</div>
	  );
	}
};

Dice.defaultProps = {
	diceCount: 1,
	diceSidesCount: 6
}


export default Dice