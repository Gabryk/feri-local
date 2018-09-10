import React from 'react'
import { Font } from 'expo'

import { StyleProvider } from "native-base"
import getTheme from 'native-base/src/theme/components'
import customThemeColor from './variables'

export default class NativeBaseUI extends React.PureComponent{
  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
  }

  render(){
    return (
      <StyleProvider style={getTheme(customThemeColor)}>
        {this.props.children}
      </StyleProvider>
    )
  }
}