import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/liferary-logo.png';

export default class Signup extends Component {
  render() {
    return (
      <View>
        <View style={signupStyle.fill}>
          <View style={signupStyle.bg}>
            <View>
              <Text style={signupStyle.title}>Register</Text>
              <Text style={signupStyle.subTitle}>Let's join us!</Text>
            </View>
            <View style={signupStyle.formWrap}>
              <KeyboardAvoidingView 
                behavior={Platform.OS == "android" ? "padding" : "height"}
                style={signupStyle.flex}>
                <TextInput style={signupStyle.input} placeholder='Name' placeholderTextColor='white'/>
                <TextInput  style={signupStyle.input} placeholder='Email' placeholderTextColor='white'/>
                <TextInput style={signupStyle.input} placeholder='Password' secureTextEntry placeholderTextColor='white'/>
              </KeyboardAvoidingView>
              <View style={signupStyle.btnWrapper}>
                <TouchableOpacity style={signupStyle.btnLogin}>
                  <Text style={signupStyle.btnTextLogin}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={signupStyle.btnRegister}>
                  <Text style={signupStyle.btnTextRegister}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const signupStyle = StyleSheet.create({
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
    letterSpacing: 8
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
    marginTop: 70
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
    color: '#34325E',
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
    color: 'white',
    letterSpacing: 3
  },
  footer: {
    marginTop: 60,
    alignItems: 'center'
  },
  footerText: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline'
  }
});
