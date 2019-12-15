import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercise from './Exercises';
import { muscles, exercises } from '../Store';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercise />
        <Footer />
      </Fragment>
    );
  }
}
