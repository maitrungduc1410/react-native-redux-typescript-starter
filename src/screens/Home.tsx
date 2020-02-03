import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
} from 'react-native'
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation'
import { IUser, ISubscription } from '@/store/types'
import env from '@/env'

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  user: IUser,
  randomUser: any,
  subscription: ISubscription,
  onUpdateUserName(name: string): void,
  onUpdateSubscriptionName(name: string): void,
  onGetRandomUser(): void,
}

export default class Home extends Component<IProps> {
  public randomString(length: number) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  public render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={env.color} barStyle={'dark-content'} />
        <View style={styles.userInfo}>
          <View>
            <Text>{this.props.user.name}</Text>
          </View>
          <View>
            <Text>{this.props.user.age}</Text>
          </View>
          <View>
            <Text>{this.props.subscription.name}</Text>
          </View>
        </View>
        <View style={styles.randomUser}>
          <Text>
            {JSON.stringify(this.props.randomUser)}
          </Text>
        </View>
        <Button
          title='Go to  Foo'
          onPress={() => this.props.navigation.navigate('Foo')}
        />
        <Button
          title='Go to  Bar'
          onPress={() => this.props.navigation.navigate('Bar')}
        />
        <Button
          title='Go to Baz'
          onPress={() => this.props.navigation.navigate('Baz')}
        />
        <Button
          title='Update user name'
          onPress={() => this.props.onUpdateUserName(`username-${this.randomString(5)}`)}
        />
        <Button
          title='Update subscription name'
          onPress={() => this.props.onUpdateSubscriptionName(`subscription-${this.randomString(5)}`)}
        />
        <Button
          title='Get random user'
          onPress={() => this.props.onGetRandomUser()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  randomUser: {
    paddingHorizontal: 30,
  },
})
