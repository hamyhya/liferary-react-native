import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, Alert}
        from 'react-native';
import {connect} from 'react-redux'

import {loginUser} from '../redux/action/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/bg.png';

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handlerChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  signin = () => {
    const dataSubmit = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(dataSubmit).then((response) => {
      this.props.navigation.navigate('mainmenu')
    }).catch(function (error) {
      Alert.alert('Incorrect Data!', 'Wrong email or password :(')
    })
  }
  signup = () => {
    this.props.navigation.navigate('signup')
  }
  adminDashboard = () => {
    this.props.navigation.navigate('mainmenuadmin')
  }
  render() {
    return (
      <View style={loginStyle.fill}>
        <Image source={bg} style={loginStyle.accent1}/>
        <View style={loginStyle.accent2}>
          <View>
            <Text style={loginStyle.title}>Liferary</Text>
            <Text style={loginStyle.subTitle}>library is life</Text>
          </View>
          <View style={loginStyle.formWrap}>
            <View>
              <TextInput onChangeText={(e) => {this.setState({email: e})}} style={loginStyle.input} placeholder='Email' placeholderTextColor='white'/>
              <TextInput onChangeText={(e) => {this.setState({password: e})}} style={loginStyle.input} placeholder='Password' secureTextEntry placeholderTextColor='white'/>
            </View>
            <View style={loginStyle.btnWrapper}>
              <TouchableOpacity style={loginStyle.btnLogin} onPress={this.signin}>
                <Text style={loginStyle.btnTextLogin}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={loginStyle.btnRegister} onPress={this.signup}>
                <Text style={loginStyle.btnTextRegister}>REGISTER</Text>
              </TouchableOpacity>
            </View>
            <View style={loginStyle.footer}>
              <TouchableOpacity onPress={this.adminDashboard}>
                <Text style={loginStyle.footerText}>I'm an administrator</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {loginUser}

export default connect(null, mapDispatchToProps)(Signin)

const loginStyle = StyleSheet.create({
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
