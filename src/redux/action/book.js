import axios from '../../services/Axios'
import {REACT_APP_URL} from 'react-native-dotenv'

const getBook = (param) =>{
const url = `${REACT_APP_URL}books?${param}`
return {
  type: 'GETBOOK',
  payload: axios().get(url)
  }
}

const getBookById = (id) =>{
  const url = `${REACT_APP_URL}books/${id}`
  return {
    type: 'GETBOOKID',
    payload: axios().get(url)
  }
}

const getLatestBook = () =>{
  const url = `${REACT_APP_URL}books/latest?limit=6`
  return {
    type: 'GETLATESTBOOK',
    payload: axios().get(url)
  }
}

const getAuthorBook = (author) =>{
  const url = `${REACT_APP_URL}books/author?search=${author}`
  return {
    type: 'GETAUTHORBOOK',
    payload: axios().get(url)
  }
}

const postBook = (dataSubmit, token) =>{
const url = `${REACT_APP_URL}books`
return {
  type: 'POSTBOOK',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchBook = (id, bookData, token) =>{
const url = `${REACT_APP_URL}books/${id}`
return {
  type: 'PATCHBOOK',
  payload: axios(token).patch(url, bookData)
  }
}

const deleteBook = (id, token) =>{
const url = `${REACT_APP_URL}books/${id}`
return {
  type: 'DELETEBOOK',
  payload: axios(token).delete(url)
  }
}


export {getBook, getBookById, getLatestBook, getAuthorBook, deleteBook, postBook, patchBook}
