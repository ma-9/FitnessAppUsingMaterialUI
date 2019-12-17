import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';

export default () => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <Typography variant="h6" style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
);
