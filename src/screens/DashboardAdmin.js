import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/dilan.jpeg';

export default class DashboardAdmin extends Component {
  detail = () => {
    this.props.navigation.navigate('detailadmin')
  }
  addBook = () => {
    this.props.navigation.navigate('addbook')
  }
  transaction = () => {
    this.props.navigation.navigate('transaction')
  }
  admin = () => {
    this.props.navigation.navigate('admin')
  }
  genre = () => {
    this.props.navigation.navigate('genre')
  }
  history = () => {
    this.props.navigation.navigate('historyadmin')
  }
  user = () => {
    this.props.navigation.navigate('user')
  }
  render() {
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.headerTitle}>Liferary</Text>
        </View>
        <View style={style.search}>
          <TextInput style={style.searchInput} placeholder='Search Book ...' placeholderTextColor='white'/>
        </View>
        <ScrollView style={style.scrollView}>
          <View style={style.menu}>
            <View style={style.menuRow}>
              <TouchableOpacity style={style.menuIcon} onPress={this.addBook}>
                <Icon size={30} color='white' name='plus-square'/>
                <Text style={style.iconText}>Add Book</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.menuIcon} onPress={this.admin}>
                <Icon size={30} color='white' name='suitcase'/>
                <Text style={style.iconText}>Admin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.menuIcon} onPress={this.user}>
                <Icon size={30} color='white' name='user'/>
                <Text style={style.iconText}>User</Text>
              </TouchableOpacity>
            </View>
            <View style={style.menuRow}>
              <TouchableOpacity style={style.menuIcon} onPress={this.transaction}>
                <Icon size={30} color='white' name='credit-card'/>
                <Text style={style.iconText}>Transaction</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.menuIcon} onPress={this.genre}>
                <Icon size={30} color='white' name='tags'/>
                <Text style={style.iconText}>Genre</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.menuIcon} onPress={this.history}>
                <Icon size={30} color='white' name='history'/>
                <Text style={style.iconText}>History</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.categories}>
            <Text style={style.categoriesText}>Our books</Text>
          </View>
          <View style={style.listBook}>
            <View style={style.bookRow}>
              <TouchableOpacity onPress={this.detail}>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>
                    <Image style={style.bookCover} source={bg} />
                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.bookRow}>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.bookRow}>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>

                  </View>
                  <Text style={style.bookTitle}>Naruto</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
    width: deviceWidth,
    alignItems: 'center',
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
  menu: {
    width: deviceWidth-120,
    height: 150,
    alignSelf: 'center',
    backgroundColor: '#252731',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuRow: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row'
  },
  menuIcon: {
    width: 55,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  iconText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white'
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
    width: deviceWidth-60,
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
