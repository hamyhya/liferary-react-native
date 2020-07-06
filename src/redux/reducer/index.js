import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from '@react-native-community/async-storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import admin from './admin'
import book from './book'
import genre from './genre'
import auth from './auth'
import history from './history'
import transaction from './transaction'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  debug: false,
}

const reducer = combineReducers({
  admin,
  book,
  genre,
  auth,
  history,
  transaction
})

export default persistReducer(persistConfig, reducer)