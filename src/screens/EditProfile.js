import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet, Dimensions, TouchableOpacity,
  Alert, TextInput
} from 'react-native';
import {connect} from 'react-redux'
import FilePickerManager from 'react-native-file-picker'

import {logout, patchUser} from '../redux/action/auth'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import bg from '../assets/img/bg.png';

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.auth.dataLogin.id,
      token: this.props.auth.dataLogin.token,
      name: this.props.route.params.name,
      image: this.props.route.params.image,
      age: this.props.route.params.age,
      address: this.props.route.params.address,
    }
  }
  editModal = () => {
    Alert.alert(
      'Are you sure?',
      "You'll redirected to login page",
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
        { text: 'Edit', 
          onPress: this.edit 
      }
      ],
      { cancelable: false }
    )
  }
  edit = () => {
    const {id, token} = this.state
    const dataSubmit = {
      name: this.state.name,
      image: this.state.image,
      age: this.state.age,
      address: this.state.address
    }

    this.props.patchUser(id, dataSubmit, token).then(() => {
      Alert.alert('Success!','Login to restart your session')
      this.logout()
    })
  }
  back = () => {
    this.props.navigation.navigate('mainmenu')
  }
  logout = () => {
    this.props.logout()
    this.props.navigation.navigate('signin')
  }
  selectFile = () => {
    FilePickerManager.showFilePicker(null, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled file picker');
      }
      else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      }
      else {
        this.setState({
          image: response.uri
        });
        console.log(this.state.image)
      }
    });
  }
  render() {
    const {name, image, address } = this.state
    const age = String(this.state.age)

    return (
      <View style={style.fill}>
        <Image source={bg} style={style.accent1} />
        <View style={style.accent2}>
          <Text style={style.title}>Edit Profile</Text>
          <View style={style.formBg}>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Name</Text>
              <TextInput 
                style={style.formInput} 
                value={name}
                onChangeText={(e) => {this.setState({name: e})}}
              />
            </View>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Image</Text>
              <View style={style.imageInputWrapper}>
                <Text style={style.imageText}>{image}</Text>
                <TouchableOpacity style={style.imageSelect} onPress={this.selectFile}>
                  <Text style={style.imageText}>select image</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Age</Text>
              <TextInput 
                style={style.formInput} 
                value={age} 
                onChangeText={(e) => {this.setState({age: e})}}
              />
            </View>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Address</Text>
              <TextInput 
                style={style.formInput} 
                value={address}
                onChangeText={(e) => {this.setState({address: e})}}
              />
            </View>
          </View>
          <TouchableOpacity style={style.editBtn} onPress={this.editModal}>
            <Text style={style.editBtnText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.backBtn} onPress={this.back}>
            <Text style={style.editBtnText}>BACK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {logout, patchUser}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

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
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  formBg: {
    width: deviceWidth-100,
    marginTop: 30,
    backgroundColor: '#252731',
    borderRadius: 10,
    padding: 15
  },
  formWrapper: {
    marginTop: 10,
  },
  formTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  formInput: {
    borderBottomWidth: 4,
    borderBottomColor: '#CFD0D4',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    color: 'white'
  },
  imageInputWrapper: {
    marginTop: 10
  },
  imageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  imageSelect: {
    width: 70,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4D4B73',
    borderRadius: 5,
    marginTop: 5
  },
  editBtn: {
    marginTop: 30,
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
    backgroundColor: '#4D4B73',
    alignItems: 'center',
    justifyContent: 'center'
  },
  editBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 3
  }
});
