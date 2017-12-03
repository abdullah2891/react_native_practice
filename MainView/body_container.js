import { Container, 
        Header, 
        Title, 
        Content, 
        Footer, 
        FooterTab, 
        Button, 
        Left, 
        Right, 
        Body, 
        Icon, 
        Text,
        Grid,Col 

    } from 'native-base';
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
            <Content  style={{marginTop:StatusBar.currentHeight}}>
                <Text>
                This is Content Section
                </Text>
            </Content>
            <Grid>
                <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            </Grid>

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