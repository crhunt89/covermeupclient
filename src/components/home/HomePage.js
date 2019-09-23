import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Covermeup from '../assets/covermeup.jpg';
import Navigation from '../navbar/Navbar';
import Current from '../voting/Voting';
import Contest from '../current/CurrentData';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${Covermeup})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  
}));
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.root}>
        <Navigation/>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Cover Me Up</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>What is this page all about?</Typography>
          </Container>
          </div>
        </div>
        <Current/>
        <Contest/>
    </div>
  );
}

export default Home;