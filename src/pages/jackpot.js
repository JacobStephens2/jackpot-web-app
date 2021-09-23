import * as React from 'react'
import Layout from '../components/Layout'
import Dice from '../components/Dice'
import Chips from '../components/Chips'
import Rules from '../components/Rules'
import JackpotBoard from '../components/JackpotBoard.js'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Jackpot = () => {
	return (
		<Layout pageTitle="Jackpot">
			<Rules
				description="This is a dice game described by Reiner Knizia in their book, Dice Games Properly Explained When you roll a number that corresponds to a space on the board with less than three chips, one of your chips goes to that space. 'If your result corresponds to a space with three counters, you win these three counters and take them from the board.' If you roll a 2, you place a chip on each space with less than three chips. If you roll a 12, you hit the jackpot and collect all chips from the board. When the first player loses their last chip, the player with the most chips wins."
			/>
			<Dice diceCount="2"/>
			<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item>
						<Chips player={1} chipCount={15}/>
					</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
						<Chips player={2} chipCount={15}/>
				</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
						<Chips player={3} chipCount={15}/>
					</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
						<Chips player={4} chipCount={15}/>
					</Item>
        </Grid>
      </Grid>
    </Box>
			
			<JackpotBoard />
		</Layout>
	)
}

export default Jackpot