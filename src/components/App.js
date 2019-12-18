import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercise from './Exercises';
import { muscles, exercises } from '../Store';

export default class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExerciseByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  render() {
    const exercises = this.getExerciseByMuscles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercise
          ex={exercise}
          onSelect={this.handleExerciseSelect}
          category={category}
          exercises={exercises}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
