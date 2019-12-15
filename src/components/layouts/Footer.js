import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default () => (
  <Paper>
    <Tabs indicatorColor="primary" value={0} textColor="primary" centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
);
