import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/liferary-logo.png';

export default class Signin extends Component {
  render() {
    return (
      <View>
        <View style={loginStyle.fill}>
          <View style={loginStyle.bg}>
            <View>
              <Text style={loginStyle.title}>Liferary</Text>
              <Text style={loginStyle.subTitle}>library is life</Text>
            </View>
            <View style={loginStyle.formWrap}>
              <View>
                <TextInput  style={loginStyle.input} placeholder='Email' placeholderTextColor='white'/>
                <TextInput style={loginStyle.input} placeholder='Password' secureTextEntry placeholderTextColor='white'/>
              </View>
              <View style={loginStyle.btnWrapper}>
                <TouchableOpacity style={loginStyle.btnLogin}>
                  <Text style={loginStyle.btnTextLogin}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyle.btnRegister}>
                  <Text style={loginStyle.btnTextRegister}>REGISTER</Text>
                </TouchableOpacity>
              </View>
              <View style={loginStyle.footer}>
                <TouchableOpacity>
                  <Text style={loginStyle.footerText}>I'm an administrator</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const loginStyle = StyleSheet.create({
  fill: {
    flex: 1,
  },
  bg: {
    width: 200,
    height: 80,
    backgroundColor: '#3F4254',
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    paddingTop: 50
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  },
  subTitle: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 7
  },
  formWrap: {
    width: 250,
    height: 270,
    marginTop: 40
  },
  input: {
    borderBottomWidth: 4,
    borderBottomColor: '#CFD0D4',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 30,
    color: 'white'
  },
  btnWrapper: {
    marginTop: 100
  },
  btnLogin: {
    marginTop: 10,
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextLogin: {
    fontWeight: 'bold',
    color: '#3F4254',
    letterSpacing: 3
  },
  btnRegister: {
    marginTop: 10,
    width: 250,
    height: 40,
    backgroundColor: '#3F4254',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextRegister: {
    fontWeight: 'bold',
    color: '#CFD0D4',
    letterSpacing: 3
  },
  footer: {
    marginTop: 60,
    alignItems: 'center'
  },
  footerText: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
  }
});
