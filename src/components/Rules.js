import * as React from 'react'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Jackpot = (props) => {
	return (
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
					<Typography variant="body1">
						{props.description}
					</Typography>
        </AccordionDetails>
      </Accordion>
	)
}

export default Jackpot