import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
//import SearchBar from './components/SearchBar';
//import PostItem from './components/PostItem';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          hidden={true}
        />
       <Text>Banana!</Text>
      </View>
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
