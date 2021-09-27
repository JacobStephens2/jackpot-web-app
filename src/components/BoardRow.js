import * as React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

class BoardRow extends React.Component {
	constructor(props) {
		super(props);
	}

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

export default BoardRow