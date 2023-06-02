import React from 'react'

import {
  Button,
  Icon,
  H1,
  Grid,
  Col
} from 'native-base'
import styles from './styles'
//import aligments  from 'utils/aligments'

export default class ButtonNewProduct extends React.PureComponent {
  render() {
    return(
      <Grid style={styles.container}>
        <Col style={styles.colBtn}>
          <Button iconLeft primary rounded style={styles.btn}>
            <Icon name='add' style={styles.btnIcon}/>
          </Button>
        </Col>
        <Col>
          <Button transparent>
            <H1>Nuevo</H1>
          </Button>
        </Col>
      </Grid>
    )
  }
}