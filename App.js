import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import SearchBar from './components/SearchBar';
//import PostItem from './components/PostItem';
import RootNavigator from './components/RootNavigator.js';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1F2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
