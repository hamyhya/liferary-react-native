import axios from '../../services/Axios'
const env = 'http://192.168.56.1:8080/'

const getBook = (param) =>{
const url = `${env}books?${param}`
return {
  type: 'GETBOOK',
  payload: axios().get(url)
  }
}

const getBookById = (id) =>{
  const url = `${env}books/${id}`
  return {
    type: 'GETBOOKID',
    payload: axios().get(url)
  }
}

const getLatestBook = () =>{
  const url = `${env}books/latest?limit=6`
  return {
    type: 'GETLATESTBOOK',
    payload: axios().get(url)
  }
}

const getAuthorBook = (author) =>{
  const url = `${env}books/author?search=${author}`
  return {
    type: 'GETAUTHORBOOK',
    payload: axios().get(url)
  }
}

const postBook = (dataSubmit, token) =>{
const url = `${env}books`
return {
  type: 'POSTBOOK',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchBook = (id, bookData, token) =>{
const url = `${env}books/${id}`
return {
  type: 'PATCHBOOK',
  payload: axios(token).patch(url, bookData)
  }
}

const deleteBook = (id, token) =>{
const url = `${env}books/${id}`
return {
  type: 'DELETEBOOK',
  payload: axios(token).delete(url)
  }
}


export {getBook, getBookById, getLatestBook, getAuthorBook, deleteBook, postBook, patchBook}
