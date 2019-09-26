import React, { useState, useEffect, useRef, } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import BackupIcon from '@material-ui/icons/Backup';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AlbumIcon from '@material-ui/icons/Album';
import { grey, green, blue } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import APIURL from '../../helpers/enviorenment';


const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    color: blue[400],
  },
  main: {
    maxWidth: 444,
    paddingLeft: 32,
    paddingRight: 32,
    width: '100%',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatar: {
    backgroundColor: grey[900],
  },
  paper: {
    display: 'flex',
    marginTop: 64,
    alignItems: 'center',
    flexDirection: 'column',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    color: grey[50],
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #01579b 40%, #81d4fa 90%)',
    boxShadow: '0 3px 5px 2px grey[900]',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Current = (props) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [contest, setContest] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick(e) {
    e.preventDefault();
    fetch(`${APIURL}/covermeup/upload`, {
      method: 'POST',
      body: JSON.stringify({ artist: name, nameOfContest: contest, video: url }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setName('');
        setContest('');
        setUrl('');
        props.fetchVideos();
      })
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  }
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Current Contest</Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>This Month's contest is "Wild Card"!! Cover whatever band and song you want then please use the Upload Video section below. Please have your video uploaded by October 21st when the voting starts!</Typography>
      </Container>
      <Container className={classes.main}>
        <div className={classes.paper}>
          <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>Upload video</Typography>
          <Avatar className={classes.avatar}><AlbumIcon /></Avatar>
          <form className={classes.form} noValidate>
            <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} autoFocus />
            <TextField variant="outlined" margin="normal" required fullWidth id="contest" label="Contest" name="contest" value={contest} onChange={(e) => setContest(e.target.value)} autoFocus />
            <TextField variant="outlined" margin="normal" required fullWidth id="url" label="URL" name="url" value={url} onChange={(e) => setUrl(e.target.value)} autoFocus />
            <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary" disabled={loading} onClick={handleButtonClick}><BackupIcon /></Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </form>
        </div>
      </Container>
    </div>
  );
}
export default Current;