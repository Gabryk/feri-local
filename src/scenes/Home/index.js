import React from 'react'

import { 
  Button,
  Icon,
  Content,
  Footer,
  FooterTab,
  Text
} from 'native-base'
import Header from 'components/SceneHeader'


export default class Home extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <Header title='Tronadora'/>
        <Content>
          <Text>Open up App.js to start working on your app!</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon type='MaterialIcons' name='local-mall'/>
              <Text>Localidad</Text>
            </Button>
            <Button vertical>
              <Icon name='person'/>
              <Text>Vender</Text>
            </Button>
            <Button vertical>
              <Icon type='Entypo' name='bar-graph'/>
              <Text>Historial</Text>
            </Button>
          </FooterTab>
        </Footer>
      </React.Fragment>
    )
  }
}