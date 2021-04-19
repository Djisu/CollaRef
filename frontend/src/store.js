import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

//import data from './data'
import { assetListReducer } from './reducers/assetReducers'

const initialState = {}

const reducer = combineReducers({
    assetList: assetListReducer,
  })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
)
export default store
