import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, KeyboardAvoidingView, Alert, ScrollView
      } from 'react-native';
import {connect} from 'react-redux'

import {register} from '../redux/action/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/bg.png';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  register = () => {
    const dataSubmit = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    if (dataSubmit.name === '' || dataSubmit.email === '' || dataSubmit.password === ''){
      Alert.alert('Oops!', 'Please fill all the form :(')
    } else{
      this.props.register(dataSubmit).then((response) => {
        Alert.alert('Success!','Now login, and start your journey :)')
        this.props.navigation.navigate('signin')
      }).catch(function (error) {
        Alert.alert('Oops!', 'Data already in used :(')
      })
    }
  }
  login = () => {
    this.props.navigation.navigate('signin')
  }
  render() {
    return (
      <View style={signupStyle.fill}>
        <Image source={bg} style={signupStyle.accent1} />
        <View style={signupStyle.accent2}>
          <View>
            <Text style={signupStyle.title}>Register</Text>
            <Text style={signupStyle.subTitle}>Let's join us!</Text>
          </View>
          <View style={signupStyle.formWrap}>
            <KeyboardAvoidingView 
              behavior={Platform.OS == "android" ? "padding" : "height"}
            >
              <TextInput onChangeText={(e) => {this.setState({name: e})}} style={signupStyle.input} placeholder='Name' placeholderTextColor='white'/>
              <TextInput onChangeText={(e) => {this.setState({email: e})}} style={signupStyle.input} placeholder='Email' placeholderTextColor='white'/>
              <TextInput onChangeText={(e) => {this.setState({password: e})}} style={signupStyle.input} placeholder='Password' secureTextEntry placeholderTextColor='white'/>
            </KeyboardAvoidingView>
            <View style={signupStyle.btnWrapper}>
              <TouchableOpacity style={signupStyle.btnRegister} onPress={this.register}>
                <Text style={signupStyle.btnTextRegister}>REGISTER</Text>
              </TouchableOpacity>
            </View>
            <View style={signupStyle.footer}>
              <TouchableOpacity onPress={this.signup} onPress={this.login}>
                <Text style={signupStyle.footerText}>I already have an account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {register}

export default connect(null, mapDispatchToProps)(Signup)

const signupStyle = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative'
  },
  accent1: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0
  },
  accent2: {
    width: 200,
    height: 80,
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    paddingTop: 50,
    position: 'absolute',
    zIndex: 1
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
