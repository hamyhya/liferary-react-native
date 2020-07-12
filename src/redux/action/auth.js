import qs from 'querystring'
import axios from '../../services/Axios'
import axiosForm from '../../services/AxiosForm'
import {REACT_APP_URL} from 'react-native-dotenv'

const register = (dataSubmit)=>{
  return {
    type: 'LOGOUT',
    payload: axios().post(`${REACT_APP_URL}users`, dataSubmit)
  }
}

const registerAdmin = (dataSubmit, token)=>{
  return {
    type: 'LOGOUT',
    payload: axios(token).post(`${REACT_APP_URL}employes`, qs.stringify(dataSubmit))
  }
}

const loginAdmin = (email, password)=>{
  return {
    type: 'LOGIN',
    payload: axios().post(`${REACT_APP_URL}employes/login`, qs.stringify({email, password}))
  }
}

const loginUser = (dataSubmit)=>{
  return {
    type: 'LOGIN',
    payload: axios().post(`${REACT_APP_URL}users/login`, dataSubmit)
  }
}

const patchUser = (id, dataSubmit, token)=>{
  return {
    type: 'LOGIN',
    payload: axiosForm(token).patch(`${REACT_APP_URL}users/${id}`, dataSubmit)
  }
}

const logout = ()=>{
  return {
    type: 'LOGOUT',
    payload: ''
  }
}

export {register, registerAdmin, loginAdmin, loginUser, patchUser, logout}