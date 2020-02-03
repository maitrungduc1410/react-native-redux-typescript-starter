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
  blacklist: ['subscriptionState'], // not persist subscriptionState (value will be reset when app restarts)
  transforms: [randomUserTransform], // ignore field 'randomUser' in 'userState' (Explain: to not persist a nested field, we use transform)
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
