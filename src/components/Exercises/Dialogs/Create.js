import React, { Fragment, Component } from 'react';

import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Tooltip,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  withStyles
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  formControl: {
    width: '100%',
    marginTop: 20
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => e => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: e.target.value
        }
      });
    };

    render() {
      const {
          open,
          exercise: { title, description, muscles }
        } = this.state,
        { classes, muscles: categories } = this.props;

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
              <form>
                <TextField
                  color="secondary"
                  label="Title"
                  onChange={this.handleChange('title')}
                  value={title}
                  variant="outlined"
                  margin="dense"
                  className={classes.formControl}
                />
                <FormControl color="secondary" className={classes.formControl}>
                  <InputLabel id="muscles">Muscles</InputLabel>
                  <Select
                    labelId="muscles"
                    id="demo-simple-select"
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                  >
                    {categories.map(category => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  className={classes.formControl}
                  color="secondary"
                  multiline
                  rows="4"
                  fullWidth
                  label="Description"
                  onChange={this.handleChange('description')}
                  value={description}
                  margin="dense"
                  variant="outlined"
                />
              </form>
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
);
