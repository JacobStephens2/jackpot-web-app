import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

class Pot extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			potCount: props.potCount
	  }
	}

	render() {
	  return (
		<div>

			<Typography variant="body1">
				Pot chip count: {this.state.potCount}
			</Typography>

		</div>
	  );
	}
};

Pot.defaultProps = {
	potCount: 0
}


export default Pot