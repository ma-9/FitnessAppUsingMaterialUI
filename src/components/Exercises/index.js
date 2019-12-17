import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const Styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 350,
    overflowY: 'auto'
  }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item xs>
      <Paper style={Styles.Paper}>
        {exercises.map(([group, exercises]) => (
          <Fragment>
            <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
              {group}
            </Typography>
            <List component="ul" aria-label="secondary mailbox folders">
              {exercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={Styles.Paper}>
        <Typography variant="h5">Welcome</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          Please Select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
