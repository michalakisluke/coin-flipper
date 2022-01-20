import React from 'react';
import Dialog from '@mui/material/Dialog';
import Signup from '../Signup';

const ModalDialog = ({ open, handleClose }) => {
  return (

    <Dialog open={open} onClose={handleClose}>

      <Signup handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;