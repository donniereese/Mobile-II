import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, StatusBar, AsyncStorage } from 'react-native';
import Button from 'react-native-button';
import axios from 'axios';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit() {
     axios.post('https://mobile-server-ii.herokuapp.com/signin', {
       email: this.state.email,
       password: this.state.password
     }).then((res) => {
       if (!res.data || !res.data.token || !res.data.user) console.log('DATA ERROR!!!: ', res);
       AsyncStorage.multiSet([['token', res.data.token], ['email', res.data.user.email]])
       .then((value) => {
         this.props.navigation.navigate('Content');
       })
       .catch(err => console.log('AsyncStorage ERROR: ', err));
     }).catch((err) => {
       console.log('Signin Async Error: ', err);
     });
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          onSubmitEditing={this.handleSubmit.bind(this)}
          underlineColorAndroid='#efefef'
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          onSubmitEditing={this.handleSubmit.bind(this)}
          underlineColorAndroid='#efefef'
        />
        <Button style={styles.button} onPress={() => this.handleSubmit()}>
          Sign In
        </Button>
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
  label: {
    width: '80%',
    height: 28,
    margin: 4,
    color: '#efefef',
    fontSize: 20
  },
  input: {
    width: '80%',
    height: 60,
    margin: 8,
    padding: 12,
    backgroundColor: '#efefef',
    color: '#0F1F2B',
    fontSize: 26
  },
  button: {
    backgroundColor: '#fefefe',
    color: '#0F1F2B',
    margin: 8,
    padding: 12,
    height: 60,
    fontSize: 24,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#2EF6EB'
  }
});
