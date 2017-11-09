import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView, StatusBar, FlatList, AsyncStorage } from 'react-native';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {
        email: ''
      }
    }
  }

  componentDidMount() {
    AsyncStorage.multiGet(['token', 'email'])
    .then((asyncRes) => {
      const token = asyncRes[0][1];
      const email = asyncRes[1][1];
      // Found
      axios({
        method: 'get',
        url: 'https://mobile-server-ii.herokuapp.com/users',
        headers: {
          authorization: token
        }
      })
      .then((res) => this.setState({ users: res.data, user: { email } }))
      .catch((err) => console.log(err));
    })
    .catch(err => {
      this.props.navigation.navigate('Home');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.state.user.email}</Text>
        <FlatList
          data={this.state.users}
          keyExtractor={(item, i) => item._id}
          renderItem={({item}) => <Text style={styles.listItem}>{item.email}</Text>}
        />
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
  header: {
    width: '100%',
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: '#efefef',
    color: '#0F1F2B',
    padding: 8,
    marginBottom: 32,
  },
  listItem: {
    backgroundColor: '#efefef',
    padding: 8,
    margin: 4,
    borderRadius: 8,
    flex: 1
  }
});
