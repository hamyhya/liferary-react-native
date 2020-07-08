import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet, Dimensions, TouchableOpacity,
  Alert
} from 'react-native';
import {connect} from 'react-redux'

import {logout} from '../redux/action/auth'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import bg from '../assets/img/bg.png';

class Profile extends Component {
  logoutModal = () => {
    Alert.alert(
      'Are you sure?',
      "You'll leave me alone :(",
      [
        {
          text: '',
          // onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Logout', 
          onPress: this.logout 
      }
      ],
      { cancelable: false }
    )
  }
  review = () => {
    this.props.navigation.navigate('review')
  }
  logout = () => {
    this.props.logout()
    this.props.navigation.navigate('signin')
  }
  render() {
    return (
      <View style={style.fill}>
        <Image source={bg} style={style.accent1} />
        <View style={style.accent2}>
          <View style={style.profileDetail}>
            <Text style={style.profileName}>{this.props.auth.dataLogin.name}</Text>
            <Text style={style.profileName}>{this.props.auth.dataLogin.email}</Text>
            <Text style={style.ProfileJoin}>We're so happy to having you :)</Text>
          </View>
          <TouchableOpacity style={style.reviewBtn} onPress={this.review}>
            <Text style={style.backBtnText}>MY REVIEWS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.backBtn} onPress={this.logoutModal}>
            <Text style={style.backBtnText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
  },
  accent2: {
    height: deviceHeight,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 3
  },
  profileDetail: {
    width: deviceWidth-100,
    marginTop: 250,
  },
  profileName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  ProfileJoin: {
    color: 'white',
    fontSize: 15,
  },
  reviewBtn: {
    marginTop: 120,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#c0ca33',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backBtn: {
    marginTop: 10,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#c62828',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5
  }
});
