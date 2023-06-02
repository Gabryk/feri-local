import React from 'react'

import {
  Text
} from 'native-base'
import Content from 'components/Content'
import SceneHeader from 'components/SceneHeader'
import ButtonNewProduct from 'components/ButtonNewProduct'
import ListProducts from 'components/ListProducts'
import Divider from 'components/Divider'


import products from './mock-products' 

export default class Stock extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <SceneHeader title='Vendiendo'/>
        <Content>
          <ButtonNewProduct/>
          <Divider/>
          <ListProducts products={products}/>
        </Content>
      </React.Fragment>
    )
  }
}