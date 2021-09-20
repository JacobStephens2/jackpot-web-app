import * as React from 'react'

const D6 = (props) => {
	
	function functionName() {
		var number = 0;
		number = number + 1;
		return number;
	}

	return (
		<div>
			<p>{props.number}D6 roll result: {functionName()}</p>
		</div>
	)
}

export default D6


