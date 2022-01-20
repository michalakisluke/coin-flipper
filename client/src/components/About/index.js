import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function About () {
    return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 480,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
          <Typography variant="h3">Determined</Typography>
          <Typography>Sit back and allow our highly complex algorithim to make all of your tough choices.</Typography>
      </Paper>
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How many decisions do you make each day? 
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The answer is probably more than you think! It is estimated that the average adult makes more than 35,00 decisions per day. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Thats a lot of choices!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              These tedious daily decisions can case people to feel overwhelmed, anxious and stressed.  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Sound familiar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is known as decision fatigue. This mental overload is not only exhaustive, but it can impede your ability to continue making decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>So what can you do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is where Determined comes in. 

            Determined is a decision making application designed to address the myriad of choices that we all encounter daily. Release yourself from the crippling burden of choosing what to wear. Let us decide if you should pivot your business or go back to sleep for 30 more minutes. Make choosing a thing of the past and leave the tough choices to us. Right or wrong, nothing really matters.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Box>
    
  );
}
export default About;