import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from './src/redux/store'

import Signin from './src/screens/Signin'
import Signup from './src/screens/Signup'
import MainMenu from './src/component/Tab'
import MainMenuAdmin from './src/component/TabAdmin'
import Detail from './src/screens/Detail'
import Admin from './src/screens/Admin'
import Genre from './src/screens/Genre'
import EditGenre from './src/screens/EditGenre'
import AddGenre from './src/screens/AddGenre'
import HistoryAdmin from './src/screens/HistoryAdmin';
import User from './src/screens/User';
import AdminDetail from './src/screens/AdminDetail';
import AddBook from './src/screens/AddBook';
import EditBook from './src/screens/EditBook';
import UserDetail from './src/screens/UserDetail';
import TransactionDetail from './src/screens/TransactionDetail';
import DetailAdmin from './src/screens/DetailAdmin';

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <NavigationContainer>
            <PersistGate persistor={persistor}>
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
                <Stack.Screen component={DetailAdmin} name={'detailadmin'} options={{
                  title: '',
                  headerTransparent: true,
                  headerTintColor: 'white'
                }}/>
                <Stack.Screen component={AddBook} name={'addbook'} options={{headerShown: false}}/>
                <Stack.Screen component={EditBook} name={'editbook'} options={{headerShown: false}}/>
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
                <Stack.Screen component={EditGenre} name={'editgenre'} options={{headerShown: false}}/>
                <Stack.Screen component={AddGenre} name={'addgenre'} options={{headerShown: false}}/>
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
            </PersistGate>
          </NavigationContainer>
        </Provider>
      </>
    );
  }
}