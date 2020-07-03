import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class Transaction extends Component {
  detail = () => {
    this.props.navigation.navigate('transactiondetail')
  }
  render() {
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.transactions}>Transactions</Text>
          <View style={style.search}>
            <TextInput style={style.searchInput} placeholder='Search Transactions ...' placeholderTextColor='white'/>
          </View>
        </View>
        <ScrollView style={style.content}>
          <TouchableOpacity style={style.transactionsList} onPress={this.detail}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>Dolan 1945</Text>
              <Text style={style.bookDate}>Monday, 1 June 2020 03:45</Text>
            </View>
            <View style={style.bookStatus}>
              <View style={style.bookStatusBadgeWarning}>
                <Text style={style.bookStatusText}>PENDING</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.line} />
          <TouchableOpacity style={style.transactionsList}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>A Tale of Two Cities</Text>
              <Text style={style.bookDate}>Tuesday, 14 April 2020 13:55</Text>
            </View>
            <View style={style.bookStatus}>
              <View style={style.bookStatusBadgeSuccess}>
                <Text style={style.bookStatusText}>BORROWED</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.line} />
          <TouchableOpacity style={style.transactionsList}>
            <View style={style.transactionsDetail}>
              <Text style={style.bookTitle}>Cinta Dalam Ikhlas</Text>
              <Text style={style.bookDate}>Friday, 5 February 2020 13:55</Text>
            </View>
            <View style={style.bookStatus}>
              <View style={style.bookStatusBadgeDanger}>
                <Text style={style.bookStatusText}>PENALTY</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  bookStatus: {
    justifyContent: 'center'
  },
  bookStatusBadgeWarning: {
    width: 80,
    height: 25,
    backgroundColor: '#c0ca33',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookStatusBadgeSuccess: {
    width: 80,
    height: 25,
    backgroundColor: '#43a047',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookStatusBadgeDanger: {
    width: 80,
    height: 25,
    backgroundColor: '#c62828',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookStatusText: {
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
