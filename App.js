import React from 'react'

import NativeBaseUI from './src/connectors/NativeBaseUI'
import { Container } from 'native-base'
import SceneHome from 'scenes/Home'


export default class App extends React.Component {
  render() {
    return (
      <NativeBaseUI>
        <Container>
          <SceneHome/>
        </Container>
      </NativeBaseUI>
    );
  }
}