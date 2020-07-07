import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from './src/redux/store'
import Navigation from './src/component/Navigation'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigation/>
          </PersistGate>
        </Provider>
      </>
    );
  }
}