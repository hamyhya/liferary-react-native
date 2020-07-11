import axios from '../../services/Axios'
import {REACT_APP_URL} from 'react-native-dotenv'

const getReview = (book_id) =>{
const url = `${REACT_APP_URL}reviews?search=${book_id}`
return {
  type: 'GETREVIEW',
  payload: axios().get(url)
  }
}

const getReviewUser = (user_id, title) =>{
  const url = `${REACT_APP_URL}reviews/${user_id}?search=${title}`
  return {
    type: 'GETREVIEWUSER',
    payload: axios().get(url)
  }
}

const postReview = (dataSubmit, token) =>{
const url = `${REACT_APP_URL}reviews`
return {
  type: 'POSTREVIEW',
  payload: axios(token).post(url, dataSubmit)
  }
}

const patchReview = (id, dataSubmit, token) =>{
const url = `${REACT_APP_URL}reviews/${id}`
return {
  type: 'PATCHREVIEW',
  payload: axios(token).patch(url, dataSubmit)
  }
}

const deleteReview = (id, token) =>{
const url = `${REACT_APP_URL}reviews/${id}`
return {
  type: 'DELETEREVIEW',
  payload: axios(token).delete(url)
  }
}


export {getReview, getReviewUser, postReview, patchReview, deleteReview}
