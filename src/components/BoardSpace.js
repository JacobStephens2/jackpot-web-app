import * as React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

class BoardSpace extends React.Component {
	render() {
		return (
			<TableRow>
				<TableCell>{this.props.name}</TableCell>
				<TableCell>{this.props.chips}
				</TableCell>
			</TableRow>
		)
	}
}

export default BoardSpace