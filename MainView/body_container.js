import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import React from 'react';
import {  StatusBar, StyleSheet ,View} from 'react-native'; //Most of the react native components can be found in NativeBase
import { Font } from 'expo'; //to include font from expo.



export default class BodyComponent extends React.Component {

    render(){
        return(
            <View>
                <Header style={{marginTop:StatusBar.currentHeight}}>
                <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
                </Left>
                <Body>
                <Title>Header</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>
                This is Content Section
                </Text>
            </Content>
            {/* <Footer>
                <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
                </FooterTab>
            </Footer> */}

            </View>
        )

    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });