import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import APIURL from '../../helpers/enviorenment';

const EditUpload = (props) => {
  const [editName, setEditName] = useState(props.videoToUpdate.name)
  const [editContest, setEditContest] = useState(props.videoToUpdate.contest);
  const [editUrl, setEditUrl] = useState(props.videoToUpdate.url);
  
  const videoUpload = (event, videos) => {
    event.preventDefault();
    fetch(`${APIURL}/covermeup/${props.videoToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({artist: editName, nameOfContest: editContest, video: editUrl}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => {
      props.fetchVideo();
      props.updateOff();
    })
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div>
      <Dialog isOpen={true} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the field below with the updated information. Then click the update button to finish.  
          </DialogContentText>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Name" name="name" value={editName} onChange={(e) => setEditName(e.target.value)} autoFocus />
            <TextField variant="outlined" margin="normal" required fullWidth id="contest" label="Contest" name="contest" value={editContest} onChange={(e) => setEditContest(e.target.value)} autoFocus />
            <TextField variant="outlined" margin="normal" required fullWidth id="url" label="URL" name="url" value={editUrl} onChange={(e) => setEditUrl(e.target.value)} autoFocus />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onSubmit={videoUpload} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default EditUpload;