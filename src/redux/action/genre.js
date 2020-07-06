import axios from '../../services/Axios'
const env = 'http://192.168.56.1:8080/'

const getGenre = () =>{
const url = `${env}genres`
return {
  type: 'GETGENRE',
  payload: axios().get(url)
  }
}

const getGenreById = (id) =>{
  const url = `${env}genres/${id}`
  return {
    type: 'GETGENREID',
    payload: axios().get(url)
  }
}

const postGenre = (dataSubmit, token) =>{
const url = `${env}genres`
return {
  type: 'POSTGENRE',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchGenre = (id, dataSubmit, token) =>{
const url = `${env}genres/${id}`
return {
  type: 'PATCHGENRE',
  payload: axios(token).patch(url, dataSubmit)
  }
}

const deleteGenre = (id, token) =>{
const url = `${env}genres/${id}`
return {
  type: 'DELETEGENRE',
  payload: axios(token).delete(url)
  }
}


export {getGenre, getGenreById, deleteGenre, postGenre, patchGenre}
