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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
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
    backgroundColor: blueGrey[500],
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
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Past Contest',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Featured Artist',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
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