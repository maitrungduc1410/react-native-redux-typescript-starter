import AsyncStorage from '@react-native-community/async-storage'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '@/store/reducers'
import { randomUserTransform } from '@/store/transforms'
// import createMySocketMiddleware from '@/store/middlewares/sockets'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['subscriptionState'], // ignore a reducer and not persist it
  transforms: [randomUserTransform], // ignore field 'randomUser' in 'userState' (Explain: to ignore a nested field, we use transform)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [
  thunkMiddleware,
  // createMySocketMiddleware(),
]

if (__DEV__) { // disable when building release
  middlewares.push(logger as any)
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
)
export const persistor = persistStore(store)
