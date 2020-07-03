import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class User extends Component {
  detail = () => {
    this.props.navigation.navigate('userdetail')
  }
  render() {
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.transactions}>Users</Text>
          <View style={style.search}>
            <TextInput style={style.searchInput} placeholder='Search User ...' placeholderTextColor='white'/>
          </View>
        </View>
        <ScrollView style={style.content}>
          <View style={style.transactionsList}>
              <TouchableOpacity onPress={this.detail}>
                <Text style={style.bookTitle}>Badang Suratno</Text>
                <Text style={style.bookDate}>badang@moonton.chn</Text>
              </TouchableOpacity>
              <View style={style.badgeWrapper}>
                <TouchableOpacity style={style.badgeDanger}>
                  <Text style={style.badgeText}>delete</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={style.line} />
          <View style={style.transactionsList}>
              <TouchableOpacity>
                <Text style={style.bookTitle}>Alberto Zilong</Text>
                <Text style={style.bookDate}>zilong99@yahoo.jp</Text>
              </TouchableOpacity>
              <View style={style.badgeWrapper}>
                <TouchableOpacity style={style.badgeDanger}>
                  <Text style={style.badgeText}>delete</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={style.line} />
          <View style={style.transactionsList}>
              <TouchableOpacity>
                <Text style={style.bookTitle}>Ronaldowanto</Text>
                <Text style={style.bookDate}>ronaldowanto@liferary.gov</Text>
              </TouchableOpacity>
              <View style={style.badgeWrapper}>
                <TouchableOpacity style={style.badgeDanger}>
                  <Text style={style.badgeText}>delete</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={style.line} />
        </ScrollView>
        <View style={style.addBtnWrapper}>
          <TouchableOpacity style={style.addBtn}>
            <Text style={style.addBtntext}>ADD USER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#3F4254'
  },
  header: {
    width: deviceWidth-100,
    height: 150,
    alignSelf: 'center',
    marginTop: 20
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topNavText: {
    color: 'white',
    marginLeft: 4,
    marginRight: 4,
    fontSize: 15,
    fontWeight: 'bold'
  },
  transactions: {
    marginTop: 30,
    fontSize: 35,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  badgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeDanger: {
    width: 50,
    height: 25,
    backgroundColor: '#c62828',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  badgeText: {
    color: 'white',
  },
  search: {
    marginTop:10,
    alignItems: 'center'
  },
  searchInput: {
    backgroundColor: '#383B4A',
    height: 35,
    width: deviceWidth-120,
    fontSize: 10,
    color: '#CFD0D4',
    borderRadius: 10,
    paddingLeft: 30
  },
  content: {
    backgroundColor: '#252731',
    width: deviceWidth,
    height: deviceHeight-170,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  transactionsList: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bookTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  bookDate: {
    color: 'white',
    fontSize: 12
  },
  addBtnWrapper: {
    width: deviceWidth,
    backgroundColor: '#252731'
  },
  addBtn: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth-120,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4D4B73',
    borderRadius: 10
  },
  addBtntext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 3
  },
  line: {
    width: deviceWidth-30,
    alignSelf: 'center',
    height: 2,
    backgroundColor: '#4D4B73'
  }
});
