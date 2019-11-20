import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import APIURL from '../../helpers/enviorenment';
import { blueGrey, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: grey[50],
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
    backgroundColor: blueGrey[500],
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const UploadTable = (props) => {
  const classes = useStyles();
  
  const deleteUpload = (videos) => {
    fetch(`${APIURL}/covermeup/${videos.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then(() => props.fetchVideos())
  }
  console.log(props.videos);
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name of Artist</TableCell>
              <TableCell align="right">Name of Contest</TableCell>
              <TableCell align="right">Video</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* This is my only array method that was used. The .map() goes into my videos array in the database and goes over each object, it then populates each object into the table that is below into their correct location on the table. It knows these spots because of matching string interpulation. */}
            {props.videos.map((videos, index) => (
              <TableRow key={index}>
                <TableCell align="right">{videos.artist}</TableCell>
                <TableCell align="right">{videos.nameOfContest}</TableCell>
                <TableCell align="right"><a href={videos.video} target="_blank">{videos.video}</a></TableCell>
                <TableCell align="right"><Button variant="contained" color="primary" onClick={() => {props.tableToUpdate(videos); props.updateOn()}} className={classes.button}>Update</Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick={() => {deleteUpload(videos)}}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
export default UploadTable; 