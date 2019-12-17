import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercise from './Exercises';
import { muscles, exercises } from '../Store';

export default class App extends Component {
  state = {
    exercises
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
  render() {
    const exercises = this.getExerciseByMuscles();
    return (
      <Fragment>
        <Header />
        <Exercise exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
