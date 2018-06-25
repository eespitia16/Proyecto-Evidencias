import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {StackNavigator} from 'react-navigation'
import MainScreen from './src/components/MainScreen'

export default class App extends React.Component {
  render() {
    return (
     <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
