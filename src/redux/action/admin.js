import axios from '../../services/Axios'
// import {REACT_APP_URL} from 'react-native-dotenv'
const env = 'http://192.168.56.1:8080/'

const getAdmin = () =>{
const url = `${env}employes/`
return {
  type: 'GETADMIN',
  payload: axios().get(url)
  }
}

const postAdmin = (dataSubmit, token) =>{
const url = `${REACT_APP_URL}employes`
return {
  type: 'POSTADMIN',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchAdmin = (id, dataSubmit, token) =>{
const url = `${REACT_APP_URL}employes/${id}`
return {
  type: 'PATCHADMIN',
  payload: axios(token).patch(url, dataSubmit)
  }
}

const deleteAdmin = (id, token) =>{
const url = `${REACT_APP_URL}employes/${id}`
return {
  type: 'DELETEADMIN',
  payload: axios(token).delete(url)
  }
}


export {getAdmin, deleteAdmin, postAdmin, patchAdmin}
