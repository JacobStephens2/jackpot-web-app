import * as React from 'react'
import Typography from '@mui/material/Typography'

class Chips extends React.Component {
	render() {
	  return (
			<span>
				<Typography variant="body1">
					Player {this.props.player} chips: {this.props.chipCount}
				</Typography>
			</span>
	  );
	}
};

Chips.defaultProps = {
	chipCount: 10,
	potCount: 0
}


export default Chips