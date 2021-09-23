import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BoardRow from './BoardRow'

class JackpotBoard extends React.Component {
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
						<BoardRow name={3} max={3}/>
						<BoardRow name={4} max={3}/>
						<BoardRow name={5} max={3}/>
						<BoardRow name={6} max={3}/>
						<BoardRow name={7} max={3}/>
						<BoardRow name={8} max={3}/>
						<BoardRow name={9} max={3}/>
						<BoardRow name={10} max={3}/>
						<BoardRow name={11} max={3}/>
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}

export default JackpotBoard