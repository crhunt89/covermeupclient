import React from 'react';
import Login from './Login';
import Signup from './Signup'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundSize: 'cover',
    overflow: 'hidden',
    fontWeight: 700,
    color: grey[900],
  },
  
}));

const Auth = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.background}> 
    {<Login updateToken={props.updateToken}/>}
    {<Signup updateToken={props.updateToken}/>}
     </div>
     );
}

export default Auth;