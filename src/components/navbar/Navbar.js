import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import UpdateIcon from '@material-ui/icons/Update';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const Navigation = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                  <ListItemIcon href="/home">
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemIcon>
                    <HowToVoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Voting" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <UpdateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Past Contest" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <FeaturedPlayListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Featured Artist" />
                </StyledMenuItem>
              </StyledMenu>
              <Typography variant="h6" className={classes.title}>
              </Typography>
              <Button color="inherit" onClick={props.clickLogout}><MeetingRoomIcon /></Button>
            </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navigation;