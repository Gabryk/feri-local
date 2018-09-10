import React from 'react'

import { 
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
} from 'native-base'

export default class SceneHeader extends React.PureComponent {
  render() {
    const { title } = this.props
    
    return(
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}