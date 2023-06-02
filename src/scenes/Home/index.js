import React from 'react'

import {
  Text
} from 'native-base'
import Content from 'components/Content'
import SceneHeader from 'components/SceneHeader'


export default class Home extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <SceneHeader title='Tronadora'/>
        <Content>
          <Text>Open up App.js to start working on your app!</Text>
        </Content>
      </React.Fragment>
    )
  }
}