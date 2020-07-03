import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import bg from '../assets/img/bg.png';

export default class UserDetail extends Component {
  logout = () => {
    this.props.navigation.navigate('user')
  }
  render() {
    return (
      <View style={style.fill}>
        <Image source={bg} style={style.accent1} />
        <View style={style.accent2}>
          <View style={style.profileDetail}>
            <Text style={style.profileName}>Badang Suratno (ID: 17)</Text>
            <Text style={style.profileName}>badang@moonton.chn</Text>
            <Text style={style.ProfileJoin}>Member since 14 April 2002</Text>
          </View>
          <TouchableOpacity style={style.backBtn} onPress={this.logout}>
            <Text style={style.backBtnText}>BACK</Text>
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
    fontSize: 25,
    fontWeight: 'bold'
  },
  ProfileJoin: {
    color: 'white',
    fontSize: 15,
  },
  backBtn: {
    marginTop: 150,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#4D4B73',
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
