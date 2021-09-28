import * as React from 'react'
import Typography from '@mui/material/Typography'

class PlayerTurn extends React.Component {
	render() {
		return (
			<Typography variant="h6" component="h2">
				{`Turn: Player ${this.props.playerTurn}`}
			</Typography>
		)
	}
}

export default PlayerTurn