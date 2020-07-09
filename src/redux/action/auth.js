import qs from 'querystring'
import axios from '../../services/Axios'
const env = 'http://192.168.56.1:8080/'

const register = (dataSubmit)=>{
  return {
    type: 'LOGOUT',
    payload: axios().post(`${env}users`, dataSubmit)
  }
}

const registerAdmin = (dataSubmit, token)=>{
  return {
    type: 'LOGOUT',
    payload: axios(token).post(`${env}employes`, qs.stringify(dataSubmit))
  }
}

const loginAdmin = (email, password)=>{
  return {
    type: 'LOGIN',
    payload: axios().post(`${env}employes/login`, qs.stringify({email, password}))
  }
}

const loginUser = (dataSubmit)=>{
  return {
    type: 'LOGIN',
    payload: axios().post(`${env}users/login`, dataSubmit)
  }
}

const patchUser = (id, dataSubmit, token)=>{
  return {
    type: 'LOGIN',
    payload: axios(token).patch(`${env}users/${id}`, dataSubmit)
  }
}

const logout = ()=>{
  return {
    type: 'LOGOUT',
    payload: ''
  }
}

export {register, registerAdmin, loginAdmin, loginUser, patchUser, logout}