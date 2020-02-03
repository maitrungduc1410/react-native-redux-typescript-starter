import { ThunkAction } from 'redux-thunk'
import { StoreActionTypes } from '@/store/actions'

export interface IUser {
  name: string,
  age: number,
}

export interface ISubscription {
  name: string,
  price: number,
}

// =================
// STORE STATE
// =================

export interface IUSerState {
  user: IUser,
  randomUser: any,
}

export interface IStoreState {
  userState: IUSerState,
  subscriptionState: ISubscription,
}

export type IStoreStateTypes = IUSerState & ISubscription

// =================
// ACTIONS
// =================
export interface IUpdateUserName {
  type: string,
  payload: string
}

export interface IUpdateRandomUser {
  type: string,
  payload: any
}

export interface IUpdateSubscriptionName {
  type: string,
  payload: string
}

// =================
// THUNKS
// =================
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IStoreState,
  null,
  StoreActionTypes
>
