import {combineReducers} from 'redux'
// import {persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import admin from './admin'

// const persistConfig = {
//   key: 'root',
//   storage,
//   stateReconciler: hardSet,
//   debug: false,
//   // whitelist: ['login, book']
// }

export default reducer = combineReducers({
  admin,
})

// export default persistReducer(persistConfig, reducer)