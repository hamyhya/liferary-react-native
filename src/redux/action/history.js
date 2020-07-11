import axios from '../../services/Axios'
import {REACT_APP_URL} from 'react-native-dotenv'

const getHistory = (param) =>{
const url = `${REACT_APP_URL}histories?${param}`
return {
  type: 'GETHISTORY',
  payload: axios().get(url)
  }
}

const getHistoryUser = (name, search) =>{
  const url = `${REACT_APP_URL}histories/user?search=${search}`
  return {
    type: 'GETHISTORY',
    payload: axios().post(url, name)
  }
}

const postHistory = (dataSubmit, token) =>{
const url = `${REACT_APP_URL}histories`
return {
  type: 'POSTHISTORY',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchHistory = (id, dataSubmit) =>{
const url = `${REACT_APP_URL}histories/${id}`
return {
  type: 'PATCHHISTORY',
  payload: axios().patch(url, dataSubmit)
  }
}

const deleteHistory = (token) =>{
const url = `${REACT_APP_URL}histories`
return {
  type: 'DELETEHISTORY',
  payload: axios(token).delete(url)
  }
}


export {getHistory, getHistoryUser, deleteHistory, postHistory, patchHistory}
