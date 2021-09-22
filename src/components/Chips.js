import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

class Chips extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			chipCount : props.chipCount,
			potCount: props.potCount
	  }
		this.addChipsToPlayerFromPot = this.potToPlayer.bind(this);
	}

	potToPlayer(change) {
		this.setState({
			chipCount: this.state.chipCount - change + change + change,
			potCount: this.state.potCount - change
		})
		console.log(typeof this.state.chipCount)
	}
	playerToPot(change) {
		this.setState({
			chipCount: this.state.chipCount - change,
			potCount: this.state.potCount - change + change + change
		})
		console.log(typeof this.state.chipCount)
	}

	render() {
	  return (
		<div>
			<Typography variant="body1">
				Player chip count: {this.state.chipCount}
			</Typography>
			<Typography variant="body1">
				Pot chip count: {this.state.potCount}
			</Typography>

			<Button 
				variant="contained"
				onClick={() => {
					this.playerToPot(1);
					console.log('chipCount: ' + typeof this.state.chipCount)
					console.log('potCount: ' + typeof this.state.potCount)

				}}
			>
				Chip to pot
			</Button>
				&ensp;
			<Button 
				variant="contained"
				onClick={() => {
					this.potToPlayer(1);
					console.log('chipCount: ' + typeof this.state.chipCount)
					console.log('potCount: ' + typeof this.state.potCount)

				}}
			>
				Chip to player
			</Button>

		</div>
	  );
	}
};

Chips.defaultProps = {
	chipCount: 10,
	potCount: 0
}


export default Chips