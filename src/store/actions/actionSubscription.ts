import {
  UPDATE_SUBSCRIPTION_NAME,
} from '@/store/constants/actionTypes'
import {
  IUpdateSubscriptionName,
} from '@/store/types'

const subscriptionAction = {
  updateSubscriptionName(
    name: string,
  ): IUpdateSubscriptionName {
    return {
      type: UPDATE_SUBSCRIPTION_NAME,
      payload: name,
    }
  },
}

export default subscriptionAction
export type SubscriptionActionTypes = IUpdateSubscriptionName
