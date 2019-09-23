import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import AlbumIcon from '@material-ui/icons/Album';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {blueGrey, grey} from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/covermeup/user/login", {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password } ),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((response) => response.json()
    ).then((data) => {props.updateToken(data.sessionToken);
    })
  }
  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: blueGrey[300],
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: grey[900],
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
  }));
  
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h2">Cover Me Up</Typography>
        <Avatar className={classes.avatar}>
          <AlbumIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Login</Typography>
        <form className={classes.form} onSubmit= {handleSubmit}>
          <TextField variant="outlined" margin="normal" onChange= {(e) => setUsername(e.target.value)} required fullWidth id="username" label="User Name" name="username" autoFocus />
          <TextField variant="outlined" margin="normal" onChange= {(e) => setPassword(e.target.value)} required fullWidth name="password" label="Password" type="password" id="password" />
          <Link href="/home"><Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">Login</Button></Link>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>   
        </form>
      </div>
    </Container>
  );
}
export default Login;