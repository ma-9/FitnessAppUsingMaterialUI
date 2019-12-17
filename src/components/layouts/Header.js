import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <Typography variant="h6">Exercise Database</Typography>
    </Toolbar>
  </AppBar>
);
