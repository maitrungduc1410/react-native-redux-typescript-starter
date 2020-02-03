import io from 'socket.io-client'
import * as eventTypes from './eventTypes'
import { MiddlewareAPI, Dispatch } from 'redux'
import { StoreActionTypes } from '@/store/actions'

const createMySocketMiddleware = () => {
  return (storeAPI: MiddlewareAPI) => {
    const socket = io('http://localhost/your_server_address', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
    })

    socket.on(eventTypes.CONNECT, (data: any) => {
      console.log('Socket connected')

      // storeAPI.dispatch({
      //   type : SOME_ACTION,
      //   payload : {
      //     anything,
      //   },
      // })
    })

    socket.on(eventTypes.DISCONNECT, (data: any) => {
      console.log('socket disconnected')
    })

    return (
      next: Dispatch<StoreActionTypes>,
    ) => (
      action: StoreActionTypes,
    ) => {
      const { type, payload } = action
      // const { userState } = storeAPI.getState()

      switch (type) {
        // case HELLO_ACTION: {
        //   socket.emit(eventTypes.HELLO)
        //   return
        // }
        default:
          return next(action)
      }
    }
  }
}

export default createMySocketMiddleware
