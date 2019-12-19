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

const styles = theme => ({
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

    handleChange = name => e =>
      this.setState({
        [name]: e.target.value
      });

    handleSubmit = () => {
      // TODO: Validate the Form

      const { exercise } = this.state;
      this.props.onSubmit({
        ...exercise,
        id: exercise.title.toLowerCase().replace(/ /g, '-')
      });
      this.setState({
        open: false,
        exercise: {
          title: '',
          description: '',
          muscles: ''
        }
      });
    };

    render() {
      const { classes, muscles: categories } = this.props,
        { title, description, muscles } = this.state;
      return (
        <form>
          <TextField
            required
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
              required
              labelId="muscles"
              id="demo-simple-select"
              value={muscles}
              onChange={this.handleChange('muscles')}
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
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
          <br />
          <br />
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="secondary"
          >
            Create
          </Button>
        </form>
      );
    }
  }
);
