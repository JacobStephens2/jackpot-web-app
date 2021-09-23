
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

class Chips extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			chipCount : props.chipCount,
	  }
		this.addChip = this.addChip.bind(this);
		this.removeChip = this.removeChip.bind(this);
	}

	addChip() {
		this.setState({
			chipCount: this.state.chipCount + 1,
		})
	}
	removeChip() {
		if(this.state.chipCount === 0) {
			return;
		} else {
			this.setState({
				chipCount: this.state.chipCount - 1,
			})
		}
	}

	render() {
	  return (
		<span>
			<Typography variant="body1">
				Player {this.props.player} chips: {this.state.chipCount}
			</Typography>

			<Button 
				variant="contained"
				onClick={() => {
					this.addChip();
				}}
			>
				Add
			</Button>

				&ensp;

			<Button 
				variant="contained"
				onClick={() => {
					this.removeChip();
				}}
			>
				Remove
			</Button>

		</span>
	  );
	}
};

Chips.defaultProps = {
	chipCount: 10,
	potCount: 0
}


export default Chips