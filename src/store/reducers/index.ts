import { userState } from './reducerUser'
import { subscriptionState } from './reducerSubscription'
import { combineReducers } from 'redux'
import { IStoreState } from '../types'

const rootReducer = combineReducers<IStoreState>({
  userState,
  subscriptionState,
})

export default rootReducer
