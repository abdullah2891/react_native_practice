import {Container,Header, Title, Button, Icon,Text} from 'native-base'; //Include Nativebase required components
import React from 'react';
import {  StatusBar, StyleSheet ,View} from 'react-native'; //Most of the react native components can be found in NativeBase
import { Font } from 'expo'; //to include font from expo.

// load up the child components 
import BodyComponent from './body_container';


export default class ContainerApp extends React.Component {
  //checking state for if font is loaded or not.
  state = {
    fontLoaded: false,
  };
   async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    //Setting the state to true when font is loaded.
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
        <Container>
          {
             this.state.fontLoaded ? (
            <BodyComponent /> 
) : null
          }
        </Container>
    );
  }
}