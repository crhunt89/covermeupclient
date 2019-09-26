import React, { useEffect, useState } from 'react';
import APIURL from '../../helpers/enviorenment';
import VotingTable from './VotingTable';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
  
  },
}));

const Voting = (props) => {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);

  const fetchVideos = () => {
    fetch(`${APIURL}/covermeup/info`, {
      method: 'GET',
      header: new Headers({
        'Content-Type': 'application/json',
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

  return (
    <div className={classes.root}>
      <VotingTable videos={videos} fetchVideos={fetchVideos} token={props.token}/>
    </div>
  );
};
export default Voting;