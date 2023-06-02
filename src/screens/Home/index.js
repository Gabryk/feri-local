import React from 'react'

import {
  Container
} from 'native-base'
import SceneHeader from 'components/SceneHeader'
import SceneFooter from 'components/SceneFooter'
import HomeNavigator from 'navigator/home'

export default class Home extends React.Component {
  render() {
    return(
      <Container>
        <HomeNavigator tabBarComponent={SceneFooter}/>
      </Container>
    )
  }
}