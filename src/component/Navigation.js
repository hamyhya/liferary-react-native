import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import Signin from '../screens/Signin'
import Signup from '../screens/Signup'
import MainMenu from './Tab'
import MainMenuAdmin from './TabAdmin'
import Detail from '../screens/Detail'
import Admin from '../screens/Admin'
import Genre from '../screens/Genre'
import EditGenre from '../screens/EditGenre'
import AddGenre from '../screens/AddGenre'
import HistoryAdmin from '../screens/HistoryAdmin'
import User from '../screens/User'
import AdminDetail from '../screens/AdminDetail'
import AddBook from '../screens/AddBook'
import EditBook from '../screens/EditBook'
import UserDetail from '../screens/UserDetail'
import TransactionDetail from '../screens/TransactionDetail'
import DetailAdmin from '../screens/DetailAdmin'
import Review from '../screens/Review'
import ReviewDetail from '../screens/ReviewDetail'
import EditProfile from '../screens/EditProfile'
import AntooLogin from '../screens/AntooLogin'

const Stack = createStackNavigator()

class Navigation extends Component {
  render() {
    const {token} = this.props.auth
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            {token===null ?(
              <>
                <Stack.Screen component={Signin} name={'signin'} options={{headerShown: false}}/>
                <Stack.Screen component={Signup} name={'signup'} options={{headerShown: false}}/>
              </>
            ):(
              <>
                <Stack.Screen component={MainMenu} name={'mainmenu'} options={{headerShown: false}}/>
                <Stack.Screen component={MainMenuAdmin} name={'mainmenuadmin'} options={{headerShown: false}}/>
                <Stack.Screen component={EditProfile} name={'editprofile'} options={{headerShown: false}}/>
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
                <Stack.Screen component={Review} name={'review'} options={{
                  title: '',
                  headerTransparent: true,
                  headerTintColor: 'white'
                }}/>
                <Stack.Screen component={ReviewDetail} name={'reviewdetail'} options={{headerShown: false}}/>
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
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Navigation)