import axios from '../../services/Axios'
import {REACT_APP_URL} from 'react-native-dotenv'

const getTransaction = (param) =>{
const url = `${REACT_APP_URL}transactions?${param}`
return {
  type: 'GETTRANSACTION',
  payload: axios().get(url)
  }
}

const getTransactionByUser = (id, search) =>{
  const url = `${REACT_APP_URL}transactions/user/${id}?sort=1&search=${search}&limit=10`
  return {
    type: 'GETTRANSACTIONBYUSER',
    payload: axios().get(url)
    }
  }

const postTransaction = (dataSubmit, token) =>{
const url = `${REACT_APP_URL}transactions`
return {
  type: 'POSTTRANSACTION',
  payload: axios(token).post(url, dataSubmit)
  }
}

const penaltyTransaction = (id, token) =>{
const url = `${REACT_APP_URL}transactions/penalty/${id}`
return {
  type: 'PENALTYTRANSACTION',
  payload: axios(token).patch(url)
  }
}

const accTransaction = (id, dataSubmit, token) =>{
  const url = `${REACT_APP_URL}transactions/acc/${id}`
  return {
    type: 'ACCTRANSACTION',
    payload: axios(token).patch(url, dataSubmit)
    }
  }

const deleteTransaction = (id, token) =>{
const url = `${REACT_APP_URL}transactions/${id}`
return {
  type: 'DELETETRANSACTION',
  payload: axios(token).delete(url)
  }
}


export {getTransaction, getTransactionByUser, deleteTransaction, postTransaction, penaltyTransaction, accTransaction}
