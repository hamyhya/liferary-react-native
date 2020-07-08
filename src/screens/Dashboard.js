import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, 
        ScrollView, FlatList} 
        from 'react-native';
import {connect} from 'react-redux'

import {getBook, getLatestBook} from '../redux/action/book'
import {getGenre} from '../redux/action/genre'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: 1,
      search: '',
      genre: ''
    }
  }
  fetchData = () => {
    const {page, search, genre} = this.state
    this.props.getBook(`page=${page}&search=${search}&genre=${genre}`)
  }
  fetchLatestData = () => {
    this.props.getLatestBook()
  }
  fetchGenre = () => {
    this.props.getGenre()
  }
  search = () => {
    setTimeout(this.fetchData, 100)
  }
  componentDidMount() {
    this.fetchLatestData()
    this.fetchData()
    this.fetchGenre()
  }
  render() {
    const {dataBook, dataBookLatest, isLoading} = this.props.book
    const {dataGenre} = this.props.genre
    const {genre, search} = this.state

    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.headerTitle}>Liferary</Text>
        </View>
        <View style={style.search}>
          <TextInput 
            style={style.searchInput} 
            placeholder='Search Book ...' 
            placeholderTextColor='white'
            onChangeText={(e) => {this.setState({search: e})}}
          />
          <TouchableOpacity style={style.searchBtn} onPress={this.search}>
            <Text style={style.searchBtnText}>search</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={style.scrollView}>
          <View style={style.categories}>
            <Text style={style.categoriesText}>Categories</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={style.categoriesList}>
                <TouchableOpacity 
                  style={style.categoriesBtn}
                  onPress={() => {
                    this.setState({genre: ''})
                    this.search()
                  }}
                >
                  <Text style={style.categoriesBtnText}>All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                style={style.categoriesList}
                data={dataGenre}
                renderItem={({item}) => (
                  <TouchableOpacity 
                    style={style.categoriesBtn} 
                    onPress={() => {
                      this.setState({genre: item.id})
                      this.search()
                    }}
                  >
                    <Text style={style.categoriesBtnText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                // refreshing={isLoading}
                // onRefresh={() => this.fetchData()}
              />
            </View>
          </View>
          <View style={style.latest}>
            <Text style={style.categoriesText}>Latest release</Text>
            <FlatList
              horizontal
              style={style.latestRow}
              data={dataBookLatest}
              renderItem={({item}) => (
               <TouchableOpacity 
                onPress={()=>this.props.navigation.push('detail', {id: item.id})}
               >
                  <Latest
                    title={item.title}
                    picture={item.picture}
                  />
               </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              refreshing={isLoading}
              // onRefresh={() => this.fetchData()}
              // onEndReached={this.nextPage}
              // onEndReachedThreshold={0.5}
            />
          </View>
          <View style={style.categories}>
            {genre==='' && search==='' ?(
              <Text style={style.categoriesText}>You may also like</Text>
            ):(
              <Text style={style.categoriesText}>Results</Text>
            )}
          </View>
          <View style={style.listBook}>
            <View style={style.bookRow}>
              <FlatList
                  data={dataBook}
                  renderItem={({item}) => (
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('detail', {id: item.id})}>
                      <Latest
                        title={item.title}
                        picture={item.picture}
                      />
                  </TouchableOpacity>
                  )}
                  numColumns={3}
                  keyExtractor={item => item.id}
                  refreshing={isLoading}
                  // onRefresh={() => this.search()}
                  // onEndReached={this.nextPage}
                  // onEndReachedThreshold={0.5}
                />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class Latest extends Component {
  render(){
    return(
      <View style={style.bookCard}>
        <View style={style.bookImage}>
          <Image style={style.bookCover} source={{uri: this.props.picture}} />
        </View>
        <Text style={style.bookTitle}>{this.props.title}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  book: state.book,
  genre: state.genre,
  auth: state.auth
})
const mapDispatchToProps = {getBook, getLatestBook, getGenre}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#3F4254'
  },
  header: {
    width: deviceWidth,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  search: {
    width: deviceWidth-120,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center'
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
  categories: {
    alignSelf: 'center',
    width: deviceWidth-120,
    marginTop: 25
  },
  categoriesText: {
    color: '#CFD0D4',
    fontSize: 20,
    fontWeight: 'bold'
  },
  categoriesList: {
    marginTop: 10,
    flexDirection: 'row'
  },
  categoriesBtn: {
    padding: 5,
    backgroundColor: '#7A7C86',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3
  },
  categoriesBtnText: {
    color: 'white',
    fontWeight: 'bold'
  },
  latest: {
    alignSelf: 'center',
    width: deviceWidth-120,
    marginTop: 25,
  },
  latestRow: {
    width: deviceWidth-120,
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    flex: 1
  },
  scrollView: {
    marginTop: 10,
  },
  listBook: {
    width: deviceWidth,
    alignItems: 'center',
    marginBottom: 10
  },
  bookRow: {
    flexDirection: 'row',
    width: deviceWidth-120,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  bookCard: {
    marginLeft: 3,
    marginRight: 3,
    width: 90,
  },
  bookImage: {
    width: 90,
    height: 120,
    backgroundColor: 'black',
    borderRadius: 10
  },
  bookCover: {
    borderRadius: 10,
    resizeMode: 'cover',
    flex: 1,
    width: undefined,
    height: undefined
  },
  bookTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  },
  footer: {
    marginTop: 50,
    width: deviceWidth,
    height: 30,
    backgroundColor: '#383B4A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    color: '#CFD0D4',
    fontWeight: 'bold'
  },
  navbar: {
    backgroundColor: '#252731',
    width: deviceWidth,
    height: 55,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarBtn: {
    backgroundColor: '#CFD0D4',
    width: 25,
    height: 25,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5
  }
});
