import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  promise: () => {
    const promises = [];
    return Promise.all(promises);
  }
}])
@connect()
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
