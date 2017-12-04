import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContainerApp from './container';
import Expo  from 'expo';


export default class MainView extends React.Component {  
    constructor(props){
      super(props);
    }

      render() {
        return (
          <View>
              <ContainerApp />
          </View>
        );
      }
}


