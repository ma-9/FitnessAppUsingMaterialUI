import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercise from './Exercises';
import { muscles, exercises } from '../Store';

export default class App extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  };

  getExerciseByMuscles = () => {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }, initExercises)
    );
  };

  handleExerciseCreate = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));

  handleCategorySelect = category =>
    this.setState({
      category
    });

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));

  handleExerciseDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise]
    }));
  };

  render() {
    const exercises = this.getExerciseByMuscles(),
      { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <br />
        <br />
        <Exercise
          muscles={muscles}
          editMode={editMode}
          onSelectEdit={this.handleExerciseSelectEdit}
          onDelete={this.handleExerciseDelete}
          exercise={exercise}
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
