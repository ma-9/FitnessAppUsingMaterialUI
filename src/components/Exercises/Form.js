import React, { Component } from 'react';

import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  withStyles,
  Button
} from '@material-ui/core';

const styles = (theme) => ({
  formControl: {
    width: '100%',
    marginTop: 20
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();

    getInitState() {
      const { exercise } = this.props;
      return exercise
        ? exercise
        : {
            title: '',
            description: '',
            muscles: ''
          };
    }

    handleChange = (name) => (e) =>
      this.setState({
        [name]: e.target.value
      });

    handleSubmit = () => {
      // TODO: Validate the Form

      this.props.onSubmit({
        id: this.state.title.toLowerCase().replace(/ /g, '-'),
        ...this.state
      });
    };

    render() {
      const { classes, muscles: categories } = this.props,
        { title, description, muscles } = this.state;
      return (
        <form>
          <TextField
            required
            color='primary'
            label='Title'
            onChange={this.handleChange('title')}
            value={title}
            variant='outlined'
            margin='dense'
            className={classes.formControl}
          />
          <FormControl color='primary' className={classes.formControl}>
            <InputLabel id='muscles'>Muscles</InputLabel>
            <Select
              required
              labelId='muscles'
              id='demo-simple-select'
              value={muscles}
              onChange={this.handleChange('muscles')}
            >
              <MenuItem default disabled>
                -- Select Any One --
              </MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            className={classes.formControl}
            color='primary'
            multiline
            rows='4'
            fullWidth
            label='Description'
            onChange={this.handleChange('description')}
            value={description}
            margin='dense'
            variant='outlined'
          />
          <br />
          <br />
          <Button
            onClick={this.handleSubmit}
            variant='contained'
            color='secondary'
            disabled={!title || !muscles}
          >
            {this.props.exercise ? 'Update' : 'Create'}
          </Button>
        </form>
      );
    }
  }
);
