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

export default class EditBook extends Component {
  dashboard = () => {
    this.props.navigation.navigate('mainmenuadmin')
  }
  back = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={style.fill}>
        <Image source={bg} style={style.accent1} />
        <View style={style.accent2}>
          <View style={style.formWrapper}>
            <Text style={style.title}>EDIT BOOK</Text>
            <View style={style.form}>
              <TextInput style={style.formInput} placeholder='Title' placeholderTextColor='white'/>
              <TextInput style={style.formInput} placeholder='Auhtor' placeholderTextColor='white'/>
              <TextInput style={style.formInput} placeholder='Genre' placeholderTextColor='white'/>
              <TextInput style={style.formInputDesc} placeholder='Description' placeholderTextColor='white'/>
              <TextInput style={style.formInput} placeholder='Image' placeholderTextColor='white'/>
            </View>
          </View>
          <View style={style.actionWrapper}>
          <TouchableOpacity style={style.editBtn} onPress={this.dashboard}>
            <Text style={style.backBtnText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.backBtn} onPress={this.back}>
            <Text style={style.backBtnText}>CANCEL</Text>
          </TouchableOpacity>
          </View>
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
  formWrapper: {
    width: deviceWidth-100,
    marginTop: 10,
    alignItems: 'center'
  },
  form: {
    marginTop: 70
  },
  formInput: {
    width: deviceWidth-100,
    height: 40,
    backgroundColor: '#8D878A',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    marginTop: 10
  },
  formInputDesc: {
    marginTop: 10,
    width: deviceWidth-100,
    height: 70,
    backgroundColor: '#8D878A',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white'
  },
  actionWrapper: {
    marginTop: 50
  },
  editBtn: {
    marginTop: 10,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#c0ca33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    marginTop: 10,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#c62828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5
  }
});
