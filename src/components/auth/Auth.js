import React from 'react';
import Login from './Login';
import Signup from './Signup'
import { makeStyles } from '@material-ui/core/styles';
import Covermeup from '../assets/covermeup.jpg'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${Covermeup})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
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