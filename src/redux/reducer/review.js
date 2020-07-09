
const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  dataReview: [],
  dataReviewUser: '',
  pageInfo: []
}

const genre = (state=initialState, action) => {
  switch(action.type){
    case 'GETREVIEW_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GETREVIEW_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'GETREVIEW_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataReview: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo
      }
    }
    case 'GETREVIEWUSER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GETREVIEWUSER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'GETREVIEWUSER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataReviewUser: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo
      }
    }
    case 'POSTREVIEW_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'POSTREVIEW_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case 'POSTREVIEW_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false
      }
    }
    case 'PATCHREVIEW_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'PATCHREVIEW_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case 'PATCHREVIEW_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false
      }
    }
    case 'DELETEREVIEW_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'DELETEREVIEW_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case 'DELETEREVIEW_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataReview: [],
        dataReviewUser: []
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default genre