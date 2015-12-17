import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';

import connectData from 'helpers/connectData';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

function fetchData() {

    return Promise.all(promises);
  return Promise.all(promises);
}

@connectData(fetchData)
@connect()
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
