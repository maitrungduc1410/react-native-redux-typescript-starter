import { AppThunk, IStoreState } from '@/store/types'
import { Dispatch } from 'redux'
import http from '@/services/http'
import env from '@/env'
import { actionUser, StoreActionTypes } from '@/store/actions'

export const getRandomUser = (): AppThunk => async (
  dispatch: Dispatch<StoreActionTypes>,
  getState: () => IStoreState,
) => {
  try {
    const { data } = await http.get(`${env.baseUrl}/?inc=name,email`)

    dispatch(actionUser.updateRandomUser(data.results[0]))
  } catch (err) {
    console.log(err)
  }
}
