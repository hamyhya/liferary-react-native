import React, {Component} from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';

import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Dashboard from './src/screens/Dashboard';
import Dashboard2 from './src/screens/Dashboard2';

export default class App extends Component {
  render() {
    return (
      <>
        <Dashboard2 />
      </>
    );
  }
}