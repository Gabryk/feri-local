import React from 'react'

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'

import Home from 'screens/Home'
//import Stock from 'screens/Stock'
import LoadingIndicator from 'components/LoadingIndicator'


const SignedIn = createStackNavigator(
  {
    Home: {
      screen: Home
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true
    }
  }
)

const SignedOut = createStackNavigator(
  {
    Home: {
      screen: Home
    }

  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true
    }
  }
)

const Modals = appNavigator =>
  createStackNavigator(
    {
      Main: {
        screen: appNavigator
      },
      Loading: {
        screen: () => <LoadingIndicator size='large' />
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
      cardStyle: {
        backgroundColor: 'transparent',
        opacity: 0.99
      }
    }
  )

const AppNavigator = signedIn =>
  createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: 'SignedIn'
    }
  )

export default Modals(AppNavigator(false))