import axios from '../../services/Axios'
import {REACT_APP_URL} from 'react-native-dotenv'

const getGenre = () =>{
const url = `${REACT_APP_URL}genres`
return {
  type: 'GETGENRE',
  payload: axios().get(url)
  }
}

const getGenreById = (id) =>{
  const url = `${REACT_APP_URL}genres/${id}`
  return {
    type: 'GETGENREID',
    payload: axios().get(url)
  }
}

const postGenre = (dataSubmit, token) =>{
const url = `${REACT_APP_URL}genres`
return {
  type: 'POSTGENRE',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchGenre = (id, dataSubmit, token) =>{
const url = `${REACT_APP_URL}genres/${id}`
return {
  type: 'PATCHGENRE',
  payload: axios(token).patch(url, dataSubmit)
  }
}

const deleteGenre = (id, token) =>{
const url = `${REACT_APP_URL}genres/${id}`
return {
  type: 'DELETEGENRE',
  payload: axios(token).delete(url)
  }
}


export {getGenre, getGenreById, deleteGenre, postGenre, patchGenre}
