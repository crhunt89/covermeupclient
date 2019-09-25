import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Upload from '../upload/Upload';
import UploadTable from '../current/UploadTable';
import EditUpload from '../current/EditUpload';
import APIURL from '../../helpers/enviorenment';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: blueGrey[300],
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  
}));
const Home = (props) => {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [tableToUpdate, setTableToUpdate] = useState({});
  
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
    setTableToUpdate(videos);
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
      <div className={classes.root}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Cover Me Up</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>What is this page all about?</Typography>
          </Container>
          </div>
        </div>
        <Upload fetchVideos={fetchVideos} token={props.token}/>
        <UploadTable videos={videos}  tableToUpdate= {tableToUpdate} updateOn= {updateOn} fetchVideos={fetchVideos} token={props.token}/>
        {updateActive ? <EditUpload tableToUpdate={tableToUpdate} updateOff={updateOff} token={props.token} fetchVideos={fetchVideos}/> : <></>}
    </div>
  );
}

export default Home;