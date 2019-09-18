import React from 'react';
import BackupIcon from '@material-ui/icons/Backup';
import Button from '@material-ui/core/Button';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const UploadPage = () => {
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Upload video for current contest
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the video url you wish to upload. Good luck!!!!
          </DialogContentText>
          <TextField autoFocus margin="dense" id="video" label="URL" type="url" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <BackupIcon/>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UploadPage;