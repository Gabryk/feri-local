import React from 'react'

import NativeBaseUI from 'connectors/NativeBaseUI'
import RootStack from 'navigator/root'


export default class App extends React.PureComponent{
  render(){
    return(
      <NativeBaseUI>
        <RootStack/>
      </NativeBaseUI>
    )
  }
}