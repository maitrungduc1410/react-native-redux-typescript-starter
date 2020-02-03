import {
  UPDATE_USER_NAME,
  UPDATE_RANDOM_USER,
} from '@/store/constants/actionTypes'
import { UserActionTypes } from '@/store/actions/actionUser'
import { IUSerState } from '@/store/types'

const initialState: IUSerState = {
  user: {
    name: 'My name',
    age: 24,
  },
  randomUser: {},
}

export const userState = (
  state = initialState,
  action: UserActionTypes,
) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_USER_NAME: {
      const user = { ...state.user }

      user.name = payload
      return {
        ...state,
        user,
      }
    }
    case UPDATE_RANDOM_USER: {
      return {
        ...state,
        randomUser: { ...payload },
      }
    }
    default:
      return state
  }
}
