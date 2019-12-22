import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Dialog from '../Exercises/Dialog';
import { withStyles } from '@material-ui/core';

const styles = {
  flex: {
    flex: 1
  }
};

export default withStyles(styles)(({ classes, onExerciseCreate }) => (
  <AppBar position='static' color='secondary'>
    <Toolbar>
      <Typography variant='h6' className={classes.flex}>
        Fitness Exercises
      </Typography>
      <Dialog />
    </Toolbar>
  </AppBar>
));
