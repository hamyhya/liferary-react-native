import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import bg from '../assets/img/bg.png';

export default class Profile extends Component {
  logout = () => {
    this.props.navigation.navigate('signin')
  }
  render() {
    return (
      <View style={style.fill}>
        <Image source={bg} style={style.accent1} />
        <View style={style.accent2}>
          <View style={style.profileDetail}>
            <Text style={style.profileName}>Ilham Bagas</Text>
            <Text style={style.profileName}>ilham@smeatech.com</Text>
            <Text style={style.ProfileJoin}>We're so happy to having you :)</Text>
          </View>
          <TouchableOpacity style={style.backBtn} onPress={this.logout}>
            <Text style={style.backBtnText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const accentHeight = 250;

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
  backBtn: {
    marginTop: 120,
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
