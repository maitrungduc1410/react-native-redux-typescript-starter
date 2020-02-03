import { createTransform } from 'redux-persist'
import { IUSerState, IStoreStateTypes } from '@/store/types'

const randomUserTransform = createTransform(
  (inboundState: IStoreStateTypes, key: any) => {
    if (key === 'userState') {
      const inboundStateClone: IUSerState = { ...inboundState }
      inboundStateClone.randomUser = {}
      return inboundStateClone
    }

    return inboundState
  },
)

export {
  randomUserTransform,
}
