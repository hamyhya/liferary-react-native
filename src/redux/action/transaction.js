import axios from '../../services/Axios'
const env = 'http://192.168.56.1:8080/'

const getTransaction = (param) =>{
const url = `${env}transactions?${param}`
return {
  type: 'GETTRANSACTION',
  payload: axios().get(url)
  }
}

const getTransactionByUser = (id) =>{
  const url = `${env}transactions/user/${id}?sort=1`
  return {
    type: 'GETTRANSACTIONBYUSER',
    payload: axios().get(url)
    }
  }

const postTransaction = (dataSubmit, token) =>{
const url = `${env}transactions`
return {
  type: 'POSTTRANSACTION',
  payload: axios(token).post(url, dataSubmit)
  }
}

const penaltyTransaction = (id, token) =>{
const url = `${env}transactions/penalty/${id}`
return {
  type: 'PENALTYTRANSACTION',
  payload: axios(token).patch(url)
  }
}

const accTransaction = (id, dataSubmit, token) =>{
  const url = `${env}transactions/acc/${id}`
  return {
    type: 'ACCTRANSACTION',
    payload: axios(token).patch(url, dataSubmit)
    }
  }

const deleteTransaction = (id, token) =>{
const url = `${env}transactions/${id}`
return {
  type: 'DELETETRANSACTION',
  payload: axios(token).delete(url)
  }
}


export {getTransaction, getTransactionByUser, deleteTransaction, postTransaction, penaltyTransaction, accTransaction}
