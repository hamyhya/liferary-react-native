
const initialState = {
  isLoading: false,
  isLoadingAuthor: false,
  isLoadingLatest: false,
  isError: false,
  errorMsg: '',
  dataBook: [],
  dataBookId: {},
  dataBookLatest: [],
  dataBookAuthor: [],
  pageInfo: []
}

const book = (state=initialState, action) => {
  switch(action.type){
    case 'GETBOOK_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GETBOOK_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'GETBOOK_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataBook: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo
      }
    }
    case 'GETBOOKID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GETBOOKID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'GETBOOKID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataBookId: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo
      }
    }
    case 'GETLATESTBOOK_PENDING': {
      return {
        ...state,
        isLoadingLatest: true,
        isError: false
      }
    }
    case 'GETLATESTBOOK_REJECTED': {
      return {
        ...state,
        isLoadingLatest: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'GETLATESTBOOK_FULFILLED': {
      return {
        ...state,
        isLoadingLatest: false,
        isError: false,
        dataBookLatest: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo
      }
    }
    case 'GETAUTHORBOOK_PENDING': {
      return {
        ...state,
        isLoadingAuthor: true,
        isError: false
      }
    }
    case 'GETAUTHORBOOK_REJECTED': {
      return {
        ...state,
        isLoadingAuthor: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'GETAUTHORBOOK_FULFILLED': {
      return {
        ...state,
        isLoadingAuthor: false,
        isError: false,
        dataBookAuthor: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo
      }
    }
    case 'POSTBOOK_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'POSTBOOK_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case 'POSTBOOK_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false
      }
    }
    case 'PATCHBOOK_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'PATCHBOOK_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case 'PATCHBOOK_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false
      }
    }
    case 'DELETEBOOK_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'DELETEBOOK_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case 'DELETEBOOK_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default book