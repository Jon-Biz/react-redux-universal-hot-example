import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        Hello World
      </div>
    );
  }
}
