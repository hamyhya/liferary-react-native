import axios from '../../services/Axios'
const env = 'http://192.168.56.1:8080/'

const getHistory = (param) =>{
const url = `${env}histories?${param}`
return {
  type: 'GETHISTORY',
  payload: axios().get(url)
  }
}

const getHistoryUser = (name) =>{
  const url = `${env}histories/user`
  // const dataSubmit = 'Jono'
  return {
    type: 'GETHISTORY',
    payload: axios().post(url, name)
  }
}

const postHistory = (dataSubmit, token) =>{
const url = `${env}histories`
return {
  type: 'POSTHISTORY',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchHistory = (id, dataSubmit) =>{
const url = `${env}histories/${id}`
return {
  type: 'PATCHHISTORY',
  payload: axios().patch(url, dataSubmit)
  }
}

const deleteHistory = (token) =>{
const url = `${env}histories`
return {
  type: 'DELETEHISTORY',
  payload: axios(token).delete(url)
  }
}


export {getHistory, getHistoryUser, deleteHistory, postHistory, patchHistory}
