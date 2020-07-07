import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView, FlatList,
        TextInput, TouchableOpacity
        } from 'react-native';
import {connect} from 'react-redux'

import {getHistoryUser} from '../redux/action/history'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/nature.jpg';

class HistoryUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.auth.dataLogin.name,
      page: 1,
      search: ''
    }
  }
  fetchHistory = () => {
    const name = {
      user: this.state.name
    }
    const {search} = this.state

    this.props.getHistoryUser(name, search)
  }
  search = () => {
    this.fetchHistory()
  }
  componentDidMount() {
    this.fetchHistory()
  }
  render() {
    const {dataHistory, isLoading} = this.props.history
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.transactions}>My Histories</Text>
          <View style={style.search}>
            <TextInput 
              style={style.searchInput} 
              placeholder='Search Histories ...' 
              placeholderTextColor='white'
              onChangeText={(e) => {this.setState({search: e})}}
            />
            <TouchableOpacity style={style.searchBtn} onPress={this.search}>
              <Text style={style.searchBtnText}>search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList 
          style={style.content}
          data={dataHistory}
          renderItem={({item}) => (
            <History
              title={item.title}
              date={item.date}
            />
          )}
          keyExtractor={item => item.id}
          refreshing={isLoading}
          onRefresh={() => {this.fetchHistory()}}
        />
      </View>
    );
  }
}

class History extends Component {
  render(){
    return(
      <>
        <View style={style.transactionsList}>
          <View style={style.transactionsDetail}>
            <Text style={style.bookTitle}>{this.props.title}</Text>
            <Text style={style.bookDate}>{this.props.date}</Text>
          </View>
        </View>
        <View style={style.line} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  history: state.history,
  auth: state.auth
})
const mapDispatchToProps = {getHistoryUser}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryUser)

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
  search: {
    width: deviceWidth-120,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  searchInput: {
    backgroundColor: '#383B4A',
    height: 35,
    width: deviceWidth-190,
    fontSize: 10,
    color: '#CFD0D4',
    borderRadius: 10,
    paddingLeft: 30
  },
  searchBtn: {
    backgroundColor: '#383B4A',
    height: 35,
    width: 60,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBtnText: {
    color: 'white',
    fontSize: 13
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
