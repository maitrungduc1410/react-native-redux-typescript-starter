import { connect } from 'react-redux'
import Home from '@/screens/Home'
import {
  actionUser,
  actionSubscription,
} from '@/store/actions'
import { IStoreState } from '@/store/types'
import { thunkUser } from '@/store/middlewares/thunks'

const mapStateToProps = (
  state: IStoreState,
) => ({
  user: state.userState.user,
  randomUser: state.userState.randomUser,
  subscription: state.subscriptionState,
})

// const mapDispatchToProps = (
//   // dispatch: ThunkDispatch<IStoreState, null, StoreActionTypes>,
//   dispatch: Dispatch<any>,
// ) => ({
//   onGetRandomUser: () => dispatch(thunkUser.getRandomUser()),
//   onUpdateUserName: (name: string) => dispatch(actionUser.updateUserName(name)),
//   onUpdateSubscriptionName: (name: string) => dispatch(actionSubscription.updateSubscriptionName(name)),
// })

const mapDispatchToProps = {
  onGetRandomUser: thunkUser.getRandomUser,
  onUpdateUserName: actionUser.updateUserName,
  onUpdateSubscriptionName: actionSubscription.updateSubscriptionName,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
