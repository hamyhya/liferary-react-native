import axios from '../../services/Axios'
const env = 'http://192.168.56.1:8080/'

const getReview = (book_id) =>{
const url = `${env}reviews?search=${book_id}`
return {
  type: 'GETREVIEW',
  payload: axios().get(url)
  }
}

const getReviewUser = (user_id, title) =>{
  const url = `${env}reviews/${user_id}?search=${title}`
  return {
    type: 'GETREVIEWUSER',
    payload: axios().get(url)
  }
}

const postReview = (dataSubmit, token) =>{
const url = `${env}reviews`
return {
  type: 'POSTREVIEW',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchReview = (id, dataSubmit, token) =>{
const url = `${env}reviews/${id}`
return {
  type: 'PATCHREVIEW',
  payload: axios(token).patch(url, dataSubmit)
  }
}

const deleteReview = (id, token) =>{
const url = `${env}reviews/${id}`
return {
  type: 'DELETEREVIEW',
  payload: axios(token).delete(url)
  }
}


export {getReview, getReviewUser, postReview, patchReview, deleteReview}
