import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

import book from '../assets/img/dilan.jpeg';

export default class Detail extends Component {
  render() {
    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.headerTitle}>Book Details</Text>
        </View>
        <View  style={style.line} />
        <View style={style.bookInfoWrapper}>
          <View style={style.bookImage}>
            <Image source={book} style={style.bookCover} />
          </View>
          <View style={style.bookInfo}>
            <Text style={style.bookTitle}>Dolan 1945</Text>
            <Text style={style.bookAuthor}>Pidi Jahat</Text>
            <View style={style.bookGenre}>
              <Text style={style.bookGenreText}>horror</Text>
            </View>
          </View>
        </View>
        <View  style={style.line} />
        <View style={style.bookDesc}>
          <Text style={style.bookDescTitle}>Book Description :</Text>
          <Text style={style.bookDescContent}>
            In 1990, Milea, her sister Airin, and their parents 
            move from Jakarta to Bandung. Her father is an Army 
            officer. On her way to the school, he met Dilan, a 
            bad boy and motorbike gang leader who confidently 
            says she will sit on his bike and he will be her 
            boyfriend. Dilan started to seduce her by coming to 
            her house, calling to her house from a payphone, and 
            sending her odd but romantic gifts which includes a
             pre-filled crossword puzzle book; "so you don’t have 
             to think about the answers".
          </Text>
        </View>
        <View style={style.line} />
        <TouchableOpacity style={style.borrowBtn}>
          <Text style={style.borrowBtnText}>BORROW</Text>
        </TouchableOpacity>
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
  line: {
    width: deviceWidth-100,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#828394',
    height: 2,
    alignSelf: 'center'
  },
  bookInfoWrapper: {
    width: deviceWidth-100,
    alignSelf: 'center',
    flexDirection: 'row',
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
  bookInfo: {
    marginLeft: 15
  },
  bookTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  bookAuthor: {
    color: '#7064BC',
    fontSize: 18,
    fontWeight: 'bold'
  },
  bookGenre: {
    width: 70,
    marginTop: 10,
    backgroundColor: '#C0C1C7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookGenreText: {
    color: '#52566B',
    fontWeight: 'bold'
  },
  bookDesc: {
    width: deviceWidth-100,
    alignSelf: 'center'
  },
  bookDescTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 15
  },
  bookDescContent: {
    color: 'white',
    marginTop: 5,
    fontSize: 13,
    marginBottom: 15
  },
  borrowBtn: {
    width: deviceWidth-100,
    height: 40,
    backgroundColor: '#7064BC',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  borrowBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 3,
  }
});
