import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class JackpotBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			s3: 0, 
			s4: 0, 
			s5: 0, 
			s6: 0, 
			s7: 0, 
			s8: 0, 
			s9: 0, 
			s10: 0, 
			s11: 0
		}
	}
	
  render() {
		return (
			<div>
			<h1>{this.state.s3}</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Space</TableCell>
							<TableCell>Chips</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
								<TableRow>
									<TableCell>3</TableCell>
									<TableCell>{this.state.s3}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>4</TableCell>
									<TableCell>{this.state.s4}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>5</TableCell>
									<TableCell>{this.state.s5}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>6</TableCell>
									<TableCell>{this.state.s6}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>7</TableCell>
									<TableCell>{this.state.s7}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>8</TableCell>
									<TableCell>{this.state.s8}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>9</TableCell>
									<TableCell>{this.state.s9}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>10</TableCell>
									<TableCell>{this.state.s10}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>11</TableCell>
									<TableCell>{this.state.s11}</TableCell>
								</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			</div>
		);
	}
}

export default JackpotBoard