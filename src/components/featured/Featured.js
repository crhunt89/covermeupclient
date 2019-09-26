import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Construction from '../assets/construction.jpg';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url${Construction}`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
}))
const Featured = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>

    </div>
  )
}
export default Featured;