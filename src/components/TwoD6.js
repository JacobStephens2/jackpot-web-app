import * as React from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Button from '@mui/material/Button';

const Roller = ({ roll, count, rolldice }) => (
  <div>
    <p>Roll Result: {roll}</p>
    <p>Roll Count: {count}</p>
    <Button variant="contained" onClick={rolldice}>Roll 2D6</Button>
  </div>
)

Roller.propTypes = {
  roll: PropTypes.number.isRequired,
  rolldice: PropTypes.func.isRequired,
}

const mapStateToProps = ({ roll, count }) => {
  return { roll, count }
}

const mapDispatchToProps = dispatch => {
  return { rolldice: () => dispatch({ type: `ROLLDICE` }) }
}

const ConnectedRoller = connect(mapStateToProps, mapDispatchToProps)(Roller)


class TwoD6 extends React.Component {
	render() {
	  return (
			<div>
				<ConnectedRoller />
			</div>
	  );
	}
};

export default TwoD6