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
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Jackpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: '',
      space3: 0,
      space4: 0,
      space5: 0,
      space6: 0,
      space7: 0,
      space8: 0,
      space9: 0,
      space10: 0,
      space11: 0
    }
    this.handleRoll = this.handleRoll.bind(this);
    this.logStates = this.logStates.bind(this);
  }

  logStates() {
    console.log(this.state.roll);
  }

  handleRoll(result) {
    this.setState({
      roll: result
    });
    switch (result) {
      case 3:
        this.setState({
          space3: this.state.space3 + 1
        })
        break;
      case 4:
        this.setState({
          space4: this.state.space4 + 1
        })
        break;
      case 5:
        this.setState({
          space5: this.state.space5 + 1
        })
        break;
      case 6:
        this.setState({
          space6: this.state.space6 + 1
        })
        break;
      case 7:
        this.setState({
          space7: this.state.space7 + 1
        })
        break;
      case 8:
        this.setState({
          space8: this.state.space8 + 1
        })
        break;
      case 9:
        this.setState({
          space9: this.state.space9 + 1
        })
        break;
      case 10:
        this.setState({
          space10: this.state.space10 + 1
        })
        break;
      case 11:
        this.setState({
          space11: this.state.space11 + 1
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Layout pageTitle="Jackpot">
        <Rules
          description="This is a dice game described by Reiner Knizia in their book, Dice Games Properly Explained When you roll a number that corresponds to a space on the board with less than three chips, one of your chips goes to that space. 'If your result corresponds to a space with three counters, you win these three counters and take them from the board.' If you roll a 2, you place a chip on each space with less than three chips. If you roll a 12, you hit the jackpot and collect all chips from the board. When the first player loses their last chip, the player with the most chips wins."
        />
        <Dice handleRoll={this.handleRoll} diceCount="2"/>
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
        <JackpotBoard 
          space3={this.state.space3}
          space4={this.state.space4}
          space5={this.state.space5}
          space6={this.state.space6}
          space7={this.state.space7}
          space8={this.state.space8}
          space9={this.state.space9}
          space10={this.state.space10}
          space11={this.state.space11}
          roll={this.state.roll} 
        />
      </Layout>
    )
  }
}

export default Jackpot