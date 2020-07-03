import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Signin from './src/screens/Signin'
import Signup from './src/screens/Signup'
import MainMenu from './src/component/Tab'
import MainMenuAdmin from './src/component/TabAdmin'
import Detail from './src/screens/Detail'
import Transaction from './src/screens/Transaction'
import Admin from './src/screens/Admin'
import Genre from './src/screens/Genre'
import HistoryAdmin from './src/screens/HistoryAdmin';
import User from './src/screens/User';
import AdminDetail from './src/screens/AdminDetail';
import UserDetail from './src/screens/UserDetail';
import TransactionDetail from './src/screens/TransactionDetail';

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Signin} name={'signin'} options={{headerShown: false}}/>
            <Stack.Screen component={Signup} name={'signup'} options={{headerShown: false}}/>
            <Stack.Screen component={MainMenu} name={'mainmenu'} options={{headerShown: false}}/>
            <Stack.Screen component={MainMenuAdmin} name={'mainmenuadmin'} options={{headerShown: false}}/>
            <Stack.Screen component={Detail} name={'detail'} options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}/>
            <Stack.Screen component={Transaction} name={'transaction'} options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}/>
            <Stack.Screen component={TransactionDetail} name={'transactiondetail'} options={{headerShown: false}}/>
            <Stack.Screen component={Admin} name={'admin'} options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}/>
            <Stack.Screen component={AdminDetail} name={'admindetail'} options={{headerShown: false}}/>
            <Stack.Screen component={Genre} name={'genre'} options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}/>
            <Stack.Screen component={HistoryAdmin} name={'historyadmin'} options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}/>
            <Stack.Screen component={User} name={'user'} options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}/>
            <Stack.Screen component={UserDetail} name={'userdetail'} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}