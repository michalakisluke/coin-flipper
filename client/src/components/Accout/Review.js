import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ReviewInput() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
          id="standard-multiline-static"
          label="Review"
          multiline
          rows={4}
          defaultValue="Leave a note"
          variant="standard"
        />
              <div>
        <Button type="submit" variant="contained" color="primary">
          Add review
        </Button>
      </div>
    </Box>
    );
}