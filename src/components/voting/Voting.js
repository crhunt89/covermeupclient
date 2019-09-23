import { React, useState, useEffect, useRef, } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import BackupIcon from '@material-ui/icons/Backup';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AlbumIcon from '@material-ui/icons/Album';
import { grey, green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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
    background: 'linear-gradient(45deg, #212121 30%, #9e9e9e 90%)',
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

const Current = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick() {
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
        <Typography variant="h5" align="center" color="textSecondary" paragraph>What is this page all about?</Typography>
      </Container>
      <Container className={classes.main}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Upload video</Typography>
          <Avatar className={classes.avatar}><AlbumIcon /></Avatar>
          <form className={classes.form} noValidate>
            <TextField variant="outlined" margin="normal" required fullWidth id="url" label="URL" name="url" autoFocus />
            <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary" disabled={loading} onClick={handleButtonClick}><BackupIcon /></Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </form>
        </div>
      </Container>
    </div>
  );
}
export default Current;