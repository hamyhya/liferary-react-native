import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, 
        FlatList, Alert, StatusBar} 
        from 'react-native';
import {connect} from 'react-redux'

import {getReviewUser} from '../redux/action/review'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Review extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.auth.dataLogin.id,
      search: ''
    }
  }
  fetchReview = () => {
    const {id, search} = this.state
    this.props.getReviewUser(id, search)
  }
  search = () => {
    this.fetchReview()
  }
  refresh = () => {
    this.fetchReview()
  }
  componentDidMount(){
    this.fetchReview()
  }
  render() {
    const {dataReviewUser, isLoading} = this.props.review
    return (
      <>
        <StatusBar backgroundColor='#383B4A' />
        <View style={style.fill}>
          <View style={style.header}>
            <Text style={style.transactions}>My Reviews</Text>
            <View style={style.search}>
              <TextInput 
                style={style.searchInput} 
                placeholder='Search Review ...' 
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
            data={dataReviewUser}
            renderItem={({item}) => (
              <>
                <TouchableOpacity 
                  style={style.transactionsList}
                  onPress={() => {this.props.navigation.navigate('reviewdetail', 
                  {
                    id: item.id,
                    title: item.title,
                    date: item.created_at,
                    comment: item.comment
                  })}}
                  >
                  <List
                    title={item.title}
                    date={item.created_at}
                  />
                </TouchableOpacity>
                <View style={style.line} />
              </>
            )}
            keyExtractor={item => item.id}
            refreshing={isLoading}
            onRefresh= {() => {this.refresh()}}
          />
        </View>
      </>
    );
  }
}

class List extends Component {
  render(){
    return(
      <>
        <View style={style.transactionsDetail}>
          <Text style={style.bookTitle}>{this.props.title}</Text>
          <Text style={style.bookDate}>{this.props.date}</Text>
        </View>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  review: state.review
})
const mapDispatchToProps = {getReviewUser}

export default connect(mapStateToProps, mapDispatchToProps)(Review)

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
    fontSize: 17,
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
