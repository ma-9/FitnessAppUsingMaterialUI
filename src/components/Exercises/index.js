import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';

import { Delete, Edit } from '@material-ui/icons';

import Form from './Form';
import { withStyles } from '@material-ui/styles';

const Styles = {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 450,
    overflowY: 'auto'
  }
};

export default withStyles(Styles)(
  ({
    muscles,
    exercises,
    category,
    onSelect,
    onDelete,
    onSelectEdit,
    editMode,
    onEdit,
    exercise,
    classes,
    exercise: {
      id,
      title = 'Welcome Folks!',
      description = 'Please Select an exercise from the list on the left.'
    }
  }) => (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <Edit color="inherit" />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete color="error" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          {editMode ? (
            <Form
              key={id}
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
            />
          ) : (
            <Typography variant="subtitle1">{description}</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
);
