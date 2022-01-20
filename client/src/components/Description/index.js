import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Description () {
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
    </Box>
    
  );
}
export default Description;