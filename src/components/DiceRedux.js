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
		this.props.handleRoll(result);
	}

	render() {
	  return (
		<Box sx={{ flexGrow: 1, marginBottom: '0.5rem', marginTop: '0.7rem' }}>
      <Grid container spacing={2}>
				<Grid item xs={3}>
						<Button 
							variant="contained"
							onClick={() => {
								this.rollDice();
							}}
						>
							Roll {this.props.diceCount}D{this.props.diceSidesCount}
						</Button>
				</Grid>
				<Grid item xs={3}>
						<Button 
							variant="contained"
							onClick={() => {
								this.clearResults();
							}}
						>
							Clear
						</Button>
				</Grid>
				<Grid item xs={6}>
						<Typography variant="body1">
							Roll result: {this.state.rollResult}
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