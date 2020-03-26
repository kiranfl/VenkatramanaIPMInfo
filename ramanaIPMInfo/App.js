/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer, createBottomTabNavigator, NavigationActions, createDrawerNavigator } from 'react-navigation';
import LanguageScreen from './components/LanguageScreen';
import HomeScreen from './components/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Language">
          <Stack.Screen name="Language" component={LanguageScreen} options=
            {{
              title: 'IPMInfo',
              headerStyle: {
                backgroundColor: '#FFC300',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Home" component={HomeScreen} options=
            {{
              title: 'IPMInfo',
              headerStyle: {
                backgroundColor: '#FFC300',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
