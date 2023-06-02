import React from 'react'

import { 
  Button,
  Icon,
  Footer,
  FooterTab,
  Text
} from 'native-base'


export default class SceneFooter extends React.PureComponent {
  render() {
    const { navigation } = this.props

    return(
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => navigation.navigate('LocalFair')}>
            <Icon type='MaterialIcons' name='local-mall'/>
            <Text>Localidad</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Stock')}>
            <Icon name='person'/>
            <Text>Vender</Text>
          </Button>
          <Button vertical>
            <Icon type='Entypo' name='bar-graph'/>
            <Text>Historial</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}