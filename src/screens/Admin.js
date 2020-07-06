import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, 
  ScrollView, FlatList, BackHandler} 
  from 'react-native';
import {connect} from 'react-redux'
import qs from 'querystring'

import {getAdmin} from '../redux/action/admin'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      isLoading: true
    }
  }
  fetchData = () => {
		this.props.getAdmin()
  }
  detail = () => {
    this.props.navigation.navigate('admindetail')
  }
  componentDidMount() {
    this.fetchData()
  }
  render() {
    const {dataAdmin, isLoading} = this.props.admin
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.transactions}>Administrators</Text>
          <View style={style.search}>
            <TextInput style={style.searchInput} placeholder='Search Admin ...' placeholderTextColor='white'/>
          </View>
        </View>
        <ScrollView style={style.content}>
          <FlatList
            data={dataAdmin}
            renderItem={({item}) => (
              <Item
                name={item.name}
                email={item.email}
              />
            )}
            keyExtractor={item => item.id}
            refreshing={isLoading}
            // onRefresh={() => this.getData({page: currentPage})}
            // onEndReached={this.nextPage}
            // onEndReachedThreshold={0.5}
          />
        </ScrollView>
        <View style={style.addBtnWrapper}>
          <TouchableOpacity style={style.addBtn}>
            <Text style={style.addBtntext}>ADD ADMIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Item extends Component {
  render(){
    return(
      <>
        <View style={style.transactionsList}>
          <TouchableOpacity onPress={this.detail}>
            <Text style={style.bookTitle}>{this.props.name}</Text>
            <Text style={style.bookDate}>{this.props.email}</Text>
          </TouchableOpacity>
          <View style={style.badgeWrapper}>
            <TouchableOpacity style={style.badgeWarning}>
              <Text style={style.badgeText}>edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.badgeDanger}>
              <Text style={style.badgeText}>delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.line} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  admin: state.admin
})
const mapDispatchToProps = {getAdmin}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

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
    alignSelf: 'center',
    flexDirection: 'row'
  },
  badgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeWarning: {
    width: 50,
    height: 25,
    backgroundColor: '#c0ca33',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
