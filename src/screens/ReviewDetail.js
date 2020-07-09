import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput,
  Alert
} from 'react-native';
import {connect} from 'react-redux'

import {patchReview, deleteReview} from '../redux/action/review'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import bg from '../assets/img/bg.png';

class ReviewDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: this.props.auth.token,
      id: this.props.route.params.id,
      comment: this.props.route.params.comment
    }
  }
  deleteModal = () => {
    Alert.alert(
      'Are you sure?',
      'Your review will be deleted',
      [
        {
          text: '',
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', 
          onPress: this.deleteReview
      }
      ],
      { cancelable: false }
    )
  }
  deleteReview = () => {
    const {id} = this.state

    this.props.deleteReview(id).then(() => {
      Alert.alert('Poof!', 'Delete review successfully')
      this.props.navigation.navigate('mainmenu')
    })
  }
  edit = () => {
    const {id, token} = this.state
    const dataSubmit = {
      comment: this.state.comment
    }
    
    this.props.patchReview(id, dataSubmit, token).then(() => {
      Alert.alert('Yay!', 'Edit review successfully')
      this.props.navigation.navigate('mainmenu')
    }).catch(() => {
      Alert.alert('Oops!', 'Make sure to fill the review')
    })
  }
  back = () => {
    this.props.navigation.navigate('review')
  }
  render() {
    const {title, date} = this.props.route.params
    const {comment} = this.state
    return (
      <View style={style.fill}>
        <Image source={bg} style={style.accent1} />
        <View style={style.accent2}>
          <View style={style.profileDetail}>
            <Text style={style.profileName}>Your review @ {title}</Text>
            <Text style={style.profileJoin}>On {date}</Text>
            <TextInput 
              style={style.comment} 
              value={comment}
              onChangeText={(e) => {this.setState({comment: e})}} 
              multiline
            />
          </View>
          <TouchableOpacity style={style.editBtn} onPress={this.edit}>
            <Text style={style.backBtnText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.deleteBtn} onPress={this.deleteModal}>
            <Text style={style.backBtnText}>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.backBtn} onPress={this.back}>
            <Text style={style.backBtnText}>BACK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {patchReview, deleteReview}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetail)

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
    marginTop: 200,
  },
  profileName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  profileJoin: {
    color: 'white',
    fontSize: 15,
  },
  comment: {
    width: deviceWidth-100,
    marginTop: 10,
    height: 100,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10
  },
  editBtn: {
    marginTop: 20,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#c0ca33',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteBtn: {
    marginTop: 10,
    width: deviceWidth-100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#c62828',
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
  backBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5
  }
});
