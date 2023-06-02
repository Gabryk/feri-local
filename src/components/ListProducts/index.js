import React from 'react'

import {
  List,
} from 'native-base'
import ListItemProduct from 'components/ListItemProduct'


export default class ListProducts extends React.PureComponent {
  render() {
    const { products } = this.props

    return(
      <List
        dataArray={products}
        renderRow={item => <ListItemProduct key={item.id} {...item}/>}
      />
    )
  }
}