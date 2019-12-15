import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default () => (
  <Grid container>
    <Grid item xs>
      <LeftPane Styles={Styles} />
    </Grid>
    <Grid item xs>
      <RightPane Styles={Styles} />
    </Grid>
  </Grid>
);
