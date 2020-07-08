import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, 
        ScrollView, FlatList, Alert, TextInput} 
        from 'react-native';
import {connect} from 'react-redux'

import {getBookById, getAuthorBook} from '../redux/action/book'
import {getGenreById} from '../redux/action/genre'
import {postTransaction} from '../redux/action/transaction'

const deviceWidth = Dimensions.get('screen').width;

import book from '../assets/img/dilan.jpeg';

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.route.params.id,
      userId: this.props.auth.dataLogin.id,
      token: this.props.auth.token,
      author: this.props.book.dataBookId.author
    }
  }
  borrowModal = () => {
    Alert.alert(
      'Borrow this book?',
      "Promise me to take the book carefully",
      [
        {
          text: '',
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', 
          onPress: this.borrow 
      }
      ],
      { cancelable: false }
    )
  }
  borrow = () => {
    const {token} = this.state
    const dataSubmit = {
      book_id: this.state.id,
      user_id: this.state.userId,
      employee_id: 7
    }

    this.props.postTransaction(dataSubmit, token).then((response) => {
      Alert.alert('Yay! Borrow success','Contact admin for completing transaction ;)')
      this.props.navigation.navigate('mainmenu')
    }).catch(function (error) {
      Alert.alert('Oops!', 'Someone has already take this book :(')
    })
  }
  fetchBook = () => {
    const {id} = this.state
    this.props.getBookById(id)
  }
  fetchAuthorBook = async () => {
    const {author} = this.state
    await this.props.getAuthorBook(author)
  }
  fetchGenre = () => {
    const id = this.props.book.dataBookId.genre
    this.props.getGenreById(id)
  }
  componentDidMount() {
    this.fetchBook()
    this.fetchAuthorBook( )
    this.fetchGenre()
  }
  render() {
    const {dataBookId, dataBookAuthor, isLoading, isLoadingAuthor} = this.props.book
    const {dataGenreId} = this.props.genre

    return (
      <View style={style.fill}>
        <View style={style.header}>
          <Text style={style.headerTitle}>Book Details</Text>
        </View>
        <View  style={style.line} />
        <ScrollView>
          <View style={style.bookInfoWrapper}>
            <View style={style.bookImage}>
              <Image source={{uri: dataBookId.picture}} style={style.bookCover} />
            </View>
            <View style={style.bookInfo}>
              <Text style={style.bookTitle}>{dataBookId.title}</Text>
              <Text style={style.bookAuthor}>{dataBookId.author}</Text>
              <View style={style.bookGenre}>
                <Text style={style.bookGenreText}>{dataGenreId}</Text>
              </View>
            </View>
          </View>
          <View  style={style.line} />
          <View style={style.bookDesc}>
            <Text style={style.bookDescTitle}>Book Description :</Text>
            <Text style={style.bookDescContent}>
              {dataBookId.description}
            </Text>
          </View>
          <View style={style.line} />
          <TouchableOpacity style={style.borrowBtn} onPress={this.borrowModal}>
            <Text style={style.borrowBtnText}>BORROW</Text>
          </TouchableOpacity>
          <View style={style.line} />
          <View style={style.review}>
            <Text style={style.bookDescTitle}>What People Says</Text>
            <View style={style.reviewWrapper}>
              <Text style={style.reviewUser}>Ilham Bagas :</Text>
              <Text style={style.reviewContent}>
                Bagus banget bukunya menginspirasi
                saya sampai nangis bacanya, huhuhu
              </Text>
              <Text style={style.reviewDate}>On Monday, 8 July 2020 14:02</Text>
            </View>
            <View style={style.reviewWrapper}>
              <Text style={style.reviewUser}>Ilham Bagas :</Text>
              <Text style={style.reviewContent}>
                Bagus banget bukunya menginspirasi
                saya sampai nangis bacanya, huhuhu
              </Text>
              <Text style={style.reviewDate}>On Monday, 8 July 2020 14:02</Text>
            </View>
          </View>
          <View style={style.line} />
          <View style={style.review}>
            <TextInput 
              style={style.reviewInput}
              placeholder='What do you think?'
              placeholderTextColor='black'
              multiline
            />
            <TouchableOpacity style={style.reviewBtn}>
              <TextInput style={style.borrowBtnText}>ADD REVIEW</TextInput>
            </TouchableOpacity>
          </View>
          <View style={style.line} />
          <View style={style.recommendation}>
            <Text style={style.bookDescTitle}>{dataBookId.author} Collections</Text>
            <ScrollView style={style.recommendationScroll}>
              <FlatList 
                horizontal={true} 
                data={dataBookAuthor}
                renderItem={({item}) => (
                <TouchableOpacity
                  style={style.recommendationBook}
                  onPress={()=>{
                    this.props.navigation.push('detail', {id: item.id})
                    this.componentDidMount()
                  }}
                >
                  <AuthorBook
                    title={item.title}
                    picture={item.picture}
                  />
                </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                refreshing={isLoadingAuthor}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class AuthorBook extends Component {
  render(){
    return(
      <View style={style.bookCard}>
        <View style={style.bookImage}>
          <Image style={style.bookCover} source={{uri: this.props.picture}} />
        </View>
        <Text style={style.recommendationBookTitle}>{this.props.title}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  book: state.book,
  genre: state.genre,
  auth: state.auth
})
const mapDispatchToProps = {getBookById, getGenreById, getAuthorBook, postTransaction}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

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
  bookCard: {
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
  bookInfo: {
    marginLeft: 15,
    width: deviceWidth-200,
  },
  bookTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
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
  },
  recommendation: {
    width: deviceWidth-100,
    alignSelf: 'center',
  },
  recommendationScroll : {
    flex: 1,
    width: '100%',
    paddingHorizontal: 0,
    marginTop: 10,
    marginBottom: 30
  },
  recommendationBook: {
    marginLeft: 5,
    marginRight: 5,
  },
  recommendationBookTitle: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center'
  },
  review: {
    width: deviceWidth-100,
    alignSelf: 'center'
  },
  reviewWrapper: {
    width: deviceWidth-100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#383B4A'
  },
  reviewUser: {
    color: 'white',
    fontWeight: 'bold'
  },
  reviewContent: {
    marginTop: 3,
    color: 'white'
  },
  reviewDate: {
    color: 'white',
    marginTop: 5,
    fontSize: 10
  },
  reviewInput: {
    width: deviceWidth-100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#383B4A',
    padding: 15,
    height: 100,
    alignItems: 'flex-start'
  },
  reviewBtn: {
    marginTop: 10,
    width: deviceWidth-100,
    height: 40,
    backgroundColor: '#c0ca33',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
