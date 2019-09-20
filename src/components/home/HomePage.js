import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Container from '@material-ui/core/Container';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Paper from '@material-ui/core/Paper';
import UpdateIcon from '@material-ui/icons/Update';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import BackupIcon from '@material-ui/icons/Backup';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AlbumIcon from '@material-ui/icons/Album';
import grey from '@material-ui/core/colors/grey';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
  root: {  //Navbar styling
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  heroContent: {   //info styling
    padding: theme.spacing(8, 0, 6),
  },
  carousel: { //rotating cards styling
    padding: 24,
    margin: 'auto',
    display: 'flex',
    borderRadius: 4,
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: blueGrey[500],
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: blueGrey[500],
    alignItems: 'center',
  },
  stepper: {
    display: 'flex',
    padding: 8,
    backgroundColor: blueGrey[500],
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    maxWidth: 400,
    flexGrow: 1,
    display: 'block'
  },
  main: {  //Upload Video section styling
    maxWidth: 444,
    paddingLeft: 32,
    paddingRight: 32,
    width: '100%',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatar:{
    backgroundColor: grey[900],
  },
  paper:{
    display: 'flex',
    marginTop: 64,
    alignItems: 'center',
    flexDirection: 'column',
  },
  form:{ 
    width: '100%',
    marginTop: theme.spacing(1),
    color: grey[50],
  },
  submit:{
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
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu elevation={0} getContentAnchorEl={null} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} transformOrigin={{ vertical: 'top', horizontal: 'center', }}{...props} />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main, '& .MuiListItemIcon-root, & .MuiListItemText-primary': { color: theme.palette.common.white, },
    },
  },
}))(MenuItem);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
  {
    label: 'Voting',
    imgPath: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/69870845_908217272893225_7189444656986324992_n.jpg?_nc_cat=106&_nc_oc=AQlB4Tlrwel77SWDHOkKimCMQlFh63B_3q2VypuLFcxcwGEJ9i2ZyBqQ9ViR5jxtqmY&_nc_ht=scontent-ort2-1.xx&oh=2f8b9b22da69e6c9608011318a4b99b7&oe=5E348B51',
  },
  {
    label: 'Past Contest',
    imgPath: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/69517732_897767063938246_6871433454345519104_n.jpg?_nc_cat=111&_nc_oc=AQlFySFn4U80469NFFNKJLyC7O3MGy34IRkbgVy2vijypUCnJOAuC78utm4fN4CUYlA&_nc_ht=scontent-ort2-1.xx&oh=023cb1346344d6029438c9797cffc2fa&oe=5E38A9C4',
  },
  {
    label: 'Featured Artist',
    imgPath: 'data:image/png;base64,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',
  },
];
const Home2 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();
  
  useEffect(() => {
    return() => {
      clearTimeout(timer.current);
    };
  },[]);
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
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }
  function handleStepChange(step) {
    setActiveStep(step);
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  function handleClose() {
    setAnchorEl(null);
  };
  return (
    <div className={classes.page}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} onClick={handleClick} color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Welcome
        </Typography>
            <Button color="inherit"><MeetingRoomIcon /></Button>
          </Toolbar>
        </AppBar>
        <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <StyledMenuItem>
            <ListItemIcon>
              <HowToVoteIcon/>
            </ListItemIcon>
            <ListItemText primary="Voting" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <UpdateIcon/>
            </ListItemIcon>
            <ListItemText primary="Previous Contest"/>
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <FeaturedVideoIcon/>
            </ListItemIcon>
            <ListItemText primary="Featured Artist"/>
          </StyledMenuItem>
        </StyledMenu>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Cover Me Up</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>What is this page all about?</Typography>
          </Container>
          <div className={classes.carousel}>
            <Container className="container" maxWidth="sm">
              <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
              </Paper>
              <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>{tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                  ) : null}
                </div>
              ))}
              </AutoPlaySwipeableViews>
              <MobileStepper className={classes.stepper} steps={maxSteps} position="static" variant="text" activeStep={activeStep} nextButton={<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>Next{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
              }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
          </Button>} />
            </Container>
          </div>
        </div>
      </div>
      <Container className= {classes.main}>
      <div className= {classes.paper}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Upload video</Typography>
      <Avatar className={classes.avatar}><AlbumIcon /></Avatar>
        <form className={classes.form}  noValidate>
        <TextField variant="outlined" margin="normal" required fullWidth id="url" label="URL" name="url" autoFocus />
        <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary" disabled={loading} onClick={handleButtonClick}><BackupIcon/></Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
        </form>
      </div>
      </Container>
    </div>
  );
}

export default Home2;