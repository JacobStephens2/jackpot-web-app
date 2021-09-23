import * as React from 'react'
import { render } from 'react-dom'
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

class BoardRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			space: 0
		}
		this.addChip = this.addChip.bind(this);
		this.removeChip = this.removeChip.bind(this);
	}

	addChip() {
		if(this.state.space === this.props.max) {
			return;
		}
		this.setState({
			space: this.state.space + 1,
		})
	}
	removeChip() {
		if (this.state.space === 0) {
			return;	
		} else {
			this.setState({
				space: this.state.space - 1,
			})
		}
	}


	render() {
		return (
			<TableRow>
				<TableCell>{this.props.name}</TableCell>
				<TableCell>{this.state.space}
					<Button onClick={() => { this.addChip()}}>Add</Button>
					<Button onClick={() => { this.removeChip()}}>Remove</Button>
				</TableCell>
			</TableRow>
		)
	}
}

export default BoardRow