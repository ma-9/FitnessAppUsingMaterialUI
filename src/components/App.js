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

  handleCategorySelcted = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  render() {
    const exercises = this.getExerciseByMuscles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header muscles={muscles} />
        <Exercise
          ex={exercise}
          onSelect={this.handleExerciseSelected}
          category={category}
          exercises={exercises}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelcted}
        />
      </Fragment>
    );
  }
}
