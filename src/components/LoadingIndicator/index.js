import React from 'react'

//import { View } from 'react-native'
import { Spinner } from 'native-base'
import styles from './styles'


export default class LoadingIndicator extends React.PureComponent {
  render() {
    return(
      <Spinner/>
    )
  }
}