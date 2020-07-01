import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/nature.jpg';

export default class Signin extends Component {
  render() {
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <View style={style.headerTitleWrapper}>
            <View>
              <Text style={style.headerTitle}>Hola,</Text>
              <Text style={style.headerTitle}>Ilham Bagas !</Text>
            </View>
            <TouchableOpacity style={style.logoutBtn}>
              <Text style={style.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={style.search} placeholder='Search books ...' placeholderTextColor='white' />
        </View>
        <View style={style.subHeader}>
          <TouchableOpacity>
            <Text style={style.subHeaderTitle}>Books</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.subHeaderTitleNon}>My Transaction</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={style.scrollView}>
          <View style={style.listBook}>
            <View style={style.bookRow}>
              <TouchableOpacity>
                <View style={style.bookCard}>
                  <View style={style.bookImage}>
                    {/* <Image style={style.bookCover} source={bg} /> */}
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
          <View style={style.footer}>
            <Text style={style.footerText}>Crafted with love by Ilham Bagas Saputra</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: deviceWidth,
    height: 180,
    backgroundColor: '#34325E',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
  },
  headerTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  logoutBtn: {
    width: 60,
    height: 30,
    backgroundColor: '#d32f2f',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold'
  },
  search: {
    marginTop: 30,
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    color: 'white'
  },
  subHeader: {
    marginTop: 30,
    width: deviceWidth,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  subHeaderTitle: {
    color: '#34325E',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#34325E',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginRight: 25
  },
  subHeaderTitleNon: {
    color: '#34325E',
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollView: {
    marginTop: 10,
  },
  listBook: {
    width: deviceWidth,
    marginTop: 20,
    alignItems: 'center',
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
    resizeMode: 'contain'
  },
  bookTitle: {
    fontSize: 15,
    textAlign: 'center'
  },
  footer: {
    marginTop: 50,
    width: deviceWidth,
    height: 30,
    backgroundColor: '#34325E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
