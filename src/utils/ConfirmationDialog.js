import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,DialogContentText
} from '@mui/material';

const ConfirmationDialog = ({open, onClose, onConfirm, title, content}) => {

  return (
    <Dialog open={open} onClose={onClose} sx={{ maxWidth: '400px', margin: 'auto' }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>


      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
