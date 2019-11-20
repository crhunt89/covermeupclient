import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Acoustic from '../assets/acoustic.jpg';
import Upload from '../upload/Upload';
import UploadTable from '../current/UploadTable';
import EditUpload from '../current/EditUpload';
import APIURL from '../../helpers/enviorenment';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundImage: `url(${Acoustic})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(8, 0, 6),
  },
  
}));
const Home = (props) => {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [videoToUpdate, setVideoToUpdate] = useState({});
  
  const fetchVideos = () => {
    fetch(`${APIURL}/covermeup/info`, {
      method: 'GET',
      header: new Headers ({
        'Content-Type' : 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
    .then((logData) => {
      setVideos(logData)
    })
  }
  useEffect(() => {
    fetchVideos();
  }, [])
  
  const tableToUpdate = (videos) => {
    setVideoToUpdate(videos);
    console.log(videos);
  }
  const updateOn = () => {
    setUpdateActive(true);
  }
  const updateOff = () => {
    setUpdateActive(false);
  }

  return (
    <div className={classes.page}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Cover Me Up</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>Cover Me Up is a place for musicians of all types to display their talent and possibly win some bragging rights!! There is a new contest every month where you will cover a song from the given bands. Have fun and good luck to all contestants!!</Typography>
            <Upload fetchVideos={fetchVideos} token={props.token}/>
          </Container>
          </div>
        <UploadTable videos={videos}  tableToUpdate= {tableToUpdate} updateOn= {updateOn} fetchVideos={fetchVideos} token={props.token}/> 
        {/* This ^^^^ is a prop being passed in from the App.js page I believe. It's passing in the token that was created by logging in or signing up  */}
        {/* This ternary below is to get the edit modal to populate on screen. In easy terms it's going to see if the updateOn() is triggered. If it is then it will display the EditUpload page (modal) if not then it will not display. The other things that are in there are props that are connected to the EditUpload page. */}
        {updateActive ? <EditUpload tableToUpdate={tableToUpdate} updateOff={updateOff} token={props.token} fetchVideos={fetchVideos}/> : <></>}
    </div>
  );
}

export default Home;