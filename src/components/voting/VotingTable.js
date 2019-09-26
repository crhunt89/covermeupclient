import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const VotingTable = (props) => {
  const classes = useStyles();

  return(
    <div>
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Name of Contest</TableCell>
            <TableCell align="right">Video Url</TableCell>
            {/* <TableCell align="right">Votes</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.videos.map((videos, index) => (
            <TableRow key={index}>
              <TableCell align="right">{videos.artist}</TableCell>
              <TableCell align="right">{videos.nameOfContest}</TableCell>
              <TableCell align="right"><a href={videos.video} target="_blank">{videos.video}</a></TableCell>
              <TableCell align="right"><Button><ThumbUpIcon/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  )
}

export default VotingTable;