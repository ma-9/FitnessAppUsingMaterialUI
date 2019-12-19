import React, { Fragment, Component } from 'react';

import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Tooltip
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import Form from './Form';

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
    const { open } = this.state,
      { muscles, onCreate } = this.props;

    return (
      <Fragment>
        <Tooltip title="Add New Exercise" placement="left">
          <Fab onClick={this.handleToggle} size="small">
            <AddIcon />
          </Fab>
        </Tooltip>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fill out the form below
            </DialogContentText>
            <Form muscles={muscles} onSubmit={onCreate} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
