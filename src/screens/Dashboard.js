import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/img/dilan.jpeg';

export default class Dashboard extends Component {
  detail = () => {
    this.props.navigation.navigate('detail')
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
          <View style={style.categories}>
            <Text style={style.categoriesText}>Categories</Text>
            <View style={style.categoriesList}>
              <TouchableOpacity style={style.categoriesBtn}>
                <Text style={style.categoriesBtnText}>comedy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.categoriesBtn}>
                <Text style={style.categoriesBtnText}>action</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.categoriesBtn}>
                <Text style={style.categoriesBtnText}>horror</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.latest}>
            <Text style={style.categoriesText}>Latest release</Text>
            <View style={style.latestRow}>
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
          </View>
          <View style={style.categories}>
            <Text style={style.categoriesText}>You may also like</Text>
          </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
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
