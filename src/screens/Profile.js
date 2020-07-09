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
  editProfile = () => {
    this.props.navigation.navigate('editprofile', 
      {
        name: this.props.auth.dataLogin.name,
        image: this.props.auth.dataLogin.image,
        age: this.props.auth.dataLogin.age,
        address: this.props.auth.dataLogin.address
      }
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
          <View style={style.imageWrapper}>
            <Image source={{uri: this.props.auth.dataLogin.image}} style={style.imageProfile}/>
          </View>
          <TouchableOpacity style={style.editBtn} onPress={this.editProfile}>
            <Text style={style.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={style.profileDetail}>
            <Text style={style.profileName}>
              {this.props.auth.dataLogin.name}
              &nbsp;({this.props.auth.dataLogin.age} years old)
            </Text>
            <Text style={style.profileName}>{this.props.auth.dataLogin.email}</Text>
            <Text style={style.ProfileJoin}>Live in {this.props.auth.dataLogin.address}</Text>
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
  imageWrapper: {
    width: 100,
    marginTop: 80,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    alignSelf: 'center'
  },
  imageProfile: {
    borderRadius: 50,
    resizeMode: 'cover',
    flex: 1,
    width: undefined,
    height: undefined
  },
  editBtn: {
    width: 90,
    height: 25,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#c0ca33',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  editBtnText: {
    color: 'white',
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
    marginTop: 100,
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
    marginTop: 50,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#43a047',
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
