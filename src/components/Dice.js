import * as React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

class Dice extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			rollResult : '',
			rollHistoryArray: [],
			rollHistoryString: '',
			rollAverage: '',
			turn: ''
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
			this.findTurn();
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

	findTurn() {
			this.state.turn = this.state.rollHistoryArray.length - ((Math.ceil(this.state.rollHistoryArray.length / 4) * 4) - 4);
	}

	clearResults() {
		this.setState({
			rollResult : '',
			rollHistoryArray: [],
			rollHistoryString: '',
			rollAverage: '',
			turn: ''
		})
	}

	render() {
	  return (
		<Box sx={{ flexGrow: 1, marginBottom: '0.5rem', marginTop: '0.7rem' }}>
      <Grid container spacing={2}>
				<Grid item xs={2}>
						<Button 
							variant="contained"
							onClick={() => {
								this.rollDice();
							}}
						>
							Roll {this.props.diceCount}D{this.props.diceSidesCount}
						</Button>
				</Grid>
				<Grid item xs={2}>
						<Button 
							variant="contained"
							onClick={() => {
								this.clearResults();
							}}
						>
							Clear
						</Button>
				</Grid>
				<Grid item xs={8}>
						<Typography variant="body1">
							Roll result: {this.state.rollResult}
						</Typography>
						<Typography variant="body1">
							Roll history: {this.state.rollHistoryString}
						</Typography>
						<Typography variant="body1">
							Roll average: {this.state.rollAverage}
						</Typography>
						<Typography variant="body1">
							Player turn: {this.state.turn}
						</Typography>
				</Grid>
			</Grid>
		</Box>
	  );
	}
};

Dice.defaultProps = {
	diceCount: 1,
	diceSidesCount: 6
}


export default Dice