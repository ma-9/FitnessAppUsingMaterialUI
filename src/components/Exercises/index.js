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

const Styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 400,
    overflowY: 'auto'
  }
};

export default ({
  muscles,
  exercises,
  category,
  onSelect,
  onDelete,
  onSelectEdit,
  editMode,
  onEdit,
  exercise,
  exercise: {
    id,
    title = 'Welcome Folks!',
    description = 'Please Select an exercise from the list on the left.'
  }
}) => (
  <Grid container>
    <Grid item xs>
      <Paper style={Styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
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
    <Grid item xs>
      <Paper style={Styles.Paper}>
        {editMode ? (
          <Form exercise={exercise} muscles={muscles} onSubmit={onEdit} />
        ) : (
          <Fragment>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          </Fragment>
        )}
      </Paper>
    </Grid>
  </Grid>
);
