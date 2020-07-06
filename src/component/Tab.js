import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Dashboard from '../screens/Dashboard'
import Profile from '../screens/Profile'
import HistoryUser from '../screens/HistoryUser'
import Transaction from '../screens/Transaction'

const BottomTab = createBottomTabNavigator()

export default class Tab extends Component {
  render() {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#252731'
          },
          activeTintColor: 'white'
        }}
      >
        <BottomTab.Screen
          options={{
            title: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          component={Dashboard}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Histories',
            tabBarIcon: ({color, size}) => (
              <Icon name="history" color={color} size={size} />
            ),
          }}
          component={HistoryUser}
          name="history"
        />
        <BottomTab.Screen
          options={{
            title: 'Transactions',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
          component={Transaction}
          name="transaction"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" solid color={color} size={size} />
            ),
          }}
          component={Profile}
          name="profile"
        />
      </BottomTab.Navigator>
    );
  }
}

const style = StyleSheet.create({
  navbar: {
    backgroundColor: 'black',
    borderRadius: 10
  }
})