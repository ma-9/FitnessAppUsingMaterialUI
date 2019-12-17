import React, { Fragment, Component } from 'react';

import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Fab onClick={this.handleToggle} size="small">
          <AddIcon />
        </Fab>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fill out the form below
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
