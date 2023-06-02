import React from 'react'

import { createBottomTabNavigator } from 'react-navigation'

import Home from 'scenes/Home'
import Stock from 'scenes/Stock'
import SceneFooter from 'components/SceneFooter'

export default createBottomTabNavigator({
  LocalFair: Home,
  Stock: Stock
  //History:
}, {tabBarComponent: SceneFooter})