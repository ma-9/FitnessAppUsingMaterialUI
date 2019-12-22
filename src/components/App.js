import React, { Component, Fragment } from 'react';
import { Header, Appbar } from './layouts';
import Exercise from './Exercises';
import { muscles, exercises } from '../Store';
import { CssBaseline } from '@material-ui/core';

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

  handleExerciseCreate = (exercise) =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));

  handleCategorySelect = (category) =>
    this.setState({
      category
    });

  handleExerciseSelect = (id) =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
      editMode: false
    }));

  handleExerciseDelete = (id) =>
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter((ex) => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));

  handleExerciseSelectEdit = (id) =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
      editMode: true
    }));

  handleExerciseEdit = (exercise) => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter((ex) => ex.id !== exercise.id), exercise],
      exercise
    }));
  };

  render() {
    const exercises = this.getExerciseByMuscles(),
      { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <CssBaseline />

        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Appbar
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}
        />
        <Exercise
          muscles={muscles}
          editMode={editMode}
          onSelectEdit={this.handleExerciseSelectEdit}
          onDelete={this.handleExerciseDelete}
          exercise={exercise}
          onSelect={this.handleExerciseSelect}
          category={category}
          exercises={exercises}
          onEdit={this.handleExerciseEdit}
        />
      </Fragment>
    );
  }
}
