import * as React from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"

const Roller = ({ roll, count, rolldice }) => (
  <div>
    <p>Roll: {roll}</p>
    <p>Rolls: {count}</p>
    <button onClick={rolldice}>Roll 1D6</button>
  </div>
)

Roller.propTypes = {
  roll: PropTypes.number.isRequired,
  rolldice: PropTypes.func.isRequired,
}

const mapStateToProps = ({ roll }) => {
  return { roll }
}

const mapDispatchToProps = dispatch => {
  return { rolldice: () => dispatch({ type: `ROLLDICE` }) }
}

const ConnectedRoller = connect(mapStateToProps, mapDispatchToProps)(Roller)


class DiceRedux extends React.Component {
	render() {
	  return (
			<div>
				<ConnectedRoller />
			</div>
	  );
	}
};

export default DiceRedux