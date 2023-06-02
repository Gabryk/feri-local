import React from 'react'

import {
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from 'native-base'

export default class ListItemProduct extends React.PureComponent {
  render() {
    const { image_url, name, price, description } = this.props

    return(
      <ListItem avatar>
        <Left>
          <Thumbnail square source={{ uri: image_url }} />
        </Left>
        <Body>
          <Text>{name}</Text>
          <Text note>{description}</Text>
        </Body>
        <Right>
          <Text note>{price}</Text>
        </Right>
      </ListItem>
    )
  }
}