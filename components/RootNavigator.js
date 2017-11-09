import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home.js';
import SigninScreen from '../screens/Signin.js';
import SignupScreen from '../screens/Signup.js';
import ContentScreen from '../screens/Content.js'

const RootNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      headerTitle: 'Home',
    },
  },
  Signin: {
    screen: SigninScreen,
    navigationOptions: {
      tabBarLabel: 'Signin',
      headerTitle: 'Sign In',
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      tabBarLabel: 'Signup',
      headerTitle: 'Sign Up',
    },
  },
  Content: {
    screen: ContentScreen,
    navigationOptions: {
      tabBarLabel: 'List',
      headerTitle: 'Users List',
    },
  }
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      backgroundColor: '#eee',
    },
    labelStyle: {
      color: '#32162f'
    },
    tabStyle: {
      borderColor: 'red'
    }
  }

});

export default RootNavigator;
