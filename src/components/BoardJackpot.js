import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BoardSpace from './BoardSpace'

class BoardJackpot extends React.Component {
  render() {
		return (
			<TableContainer component={Paper}>
				<Table size="small" aria-label="Jackpot board in tabular format">
					<TableHead>
						<TableRow>
							<TableCell>Space</TableCell>
							<TableCell>Chips</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<BoardSpace 
							name={3} 
							max={3} 
							chips={this.props.space3}
						/>
						<BoardSpace chips={this.props.space4} name={4} max={3}/>
						<BoardSpace chips={this.props.space5} name={5} max={3}/>
						<BoardSpace chips={this.props.space6} name={6} max={3}/>
						<BoardSpace chips={this.props.space7} name={7} max={3}/>
						<BoardSpace chips={this.props.space8} name={8} max={3}/>
						<BoardSpace chips={this.props.space9} name={9} max={3}/>
						<BoardSpace chips={this.props.space10} name={10} max={3}/>
						<BoardSpace chips={this.props.space11} name={11} max={3}/>
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}

export default BoardJackpot