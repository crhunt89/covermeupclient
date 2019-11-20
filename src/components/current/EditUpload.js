import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import APIURL from '../../helpers/enviorenment';

// This is one of my props. It's used in the UploadTable because it populates from a button and then passes this information back to the UploadTable. 
const EditUpload = (props) => {
  const [editName, setEditName] = useState(props.tableToUpdate.name)
  const [editContest, setEditContest] = useState(props.tableToUpdate.contest);
  const [editUrl, setEditUrl] = useState(props.tableToUpdate.url);
  
  const videoUpload = (e) => {
    e.preventDefault();
    console.log('videoUpload hit!')
    fetch(`${APIURL}/covermeup/${props.tableToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({artist: editName, nameOfContest: editContest, video: editUrl}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => {
      props.fetchVideos();
      props.updateOff();
    })
  }

  return(
    <div>
      <Dialog open={true}>
          <form onSubmit={(e) => videoUpload(e)}>
        <DialogTitle >Update Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the field below with the updated information. Then click the update button to finish.  
          </DialogContentText>
            <TextField variant="outlined" margin="normal" fullWidth id="name" label="Name" name="editName" value={editName} onChange={(e) => setEditName(e.target.value)} autoFocus />
            <TextField variant="outlined" margin="normal" fullWidth id="contest" label="Contest" name="editContest" value={editContest} onChange={(e) => setEditContest(e.target.value)} autoFocus />
            <TextField variant="outlined" margin="normal" fullWidth id="url" label="URL" name="editUrl" value={editUrl} onChange={(e) => setEditUrl(e.target.value)} autoFocus />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.updateOff} color="primary">Cancel</Button>
          <Button type="submit" color="primary">Update</Button>
        </DialogActions>
          </form>
      </Dialog>
    </div>
  );
};
export default EditUpload;