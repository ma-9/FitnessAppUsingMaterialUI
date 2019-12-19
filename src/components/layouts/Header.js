import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Dialog from '../Exercises/Dialog';

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="fixed" color="secondary">
    <Toolbar>
      <Typography variant="h6" style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <Dialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);
