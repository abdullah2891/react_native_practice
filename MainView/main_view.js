import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContainerApp from './container';
import Expo  from 'expo';


export default class MainView extends React.Component {  
    constructor(props){
      super(props);
    }


    async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }
      render() {
        return (
          <View>
              <ContainerApp />
          </View>
        );
      }
}


