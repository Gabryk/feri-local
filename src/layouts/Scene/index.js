import React from 'react'

import {
  Container,
  Content,
} from 'native-base'
import SceneHeader from 'components/SceneHeader'
import SceneFooter from 'components/SceneFooter'


export default class Scene extends React.PureComponent {
  render() {
    const { title, children, navigation } = this.props

    return(
      <Container>
        <SceneHeader title={title} navigation={navigation}/>

        <Content}>
          {children && children}
        </Content>

        <SceneFooter navigation={navigation}/>
      </Container>
    )
  }
}