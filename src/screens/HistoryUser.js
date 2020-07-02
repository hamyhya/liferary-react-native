import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/nature.jpg';

export default class Transaction extends Component {
  render() {
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.transactions}>My Histories</Text>
        </View>
        <ScrollView style={style.content}>
          <View style={style.transactionsList}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>Dolan 1945</Text>
              <Text style={style.bookDate}>Monday, 1 June 2020 03:45</Text>
            </View>
          </View>
          <View style={style.line} />
          <View style={style.transactionsList}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>A Tale of Two Cities</Text>
              <Text style={style.bookDate}>Tuesday, 14 April 2020 13:55</Text>
            </View>
          </View>
          <View style={style.line} />
          <View style={style.transactionsList}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>Cinta Dalam Ikhlas</Text>
              <Text style={style.bookDate}>Friday, 5 February 2020 13:55</Text>
            </View>
          </View>
          <View style={style.line} />
          <View style={style.transactionsList}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>Cinta Dalam Ikhlas</Text>
              <Text style={style.bookDate}>Friday, 5 February 2020 13:55</Text>
            </View>
          </View>
          <View style={style.line} />
          <View style={style.transactionsList}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>Cinta Dalam Ikhlas</Text>
              <Text style={style.bookDate}>Friday, 5 February 2020 13:55</Text>
            </View>
          </View>
          <View style={style.line} />
        </ScrollView>
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
    height: 130,
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
    marginTop: 20,
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
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
  line: {
    width: deviceWidth-30,
    alignSelf: 'center',
    height: 2,
    backgroundColor: '#4D4B73'
  }
});
