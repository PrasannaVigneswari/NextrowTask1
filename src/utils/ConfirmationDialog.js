import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const ConfirmationDialog = ({open, onClose, onConfirm, title, content,children}) => {
  return (
    <Dialog open={open} onClose={onClose} sx={{ maxWidth: '400px', margin: 'auto' }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogContent >{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={onConfirm} color="primary">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;