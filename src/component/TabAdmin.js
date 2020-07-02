import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import DashboardAdmin from '../screens/DashboardAdmin'
import Profile from '../screens/Profile'

const BottomTab = createBottomTabNavigator()

export default class TabAdmin extends Component {
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
          component={DashboardAdmin}
          name="home"
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