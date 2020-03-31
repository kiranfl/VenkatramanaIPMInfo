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



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/reducers';
import LanguageScreen from './components/LanguageScreen';
import CropListsScreen from './components/CropListsScreen';
import CropsDetailsScreen from './components/CropsDetailsScreen';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

function Apps() {
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
        <Stack.Screen name="Home" component={CropListsScreen} options=
          {{
            title: 'IPMInfo',
            headerStyle: {
              backgroundColor: '#FFC300',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen name="CropsDetails" component={CropsDetailsScreen} options=
          {{
            title: 'IPMInfo',
            headerStyle: {
              backgroundColor: '#FFC300',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

class App extends Component {
  render() {
    return (
      <Apps />
    );
  }
}
const mapStateToProps = (state) => {
  return (
    {
    }
  )
};
const AppWithNavigationState = connect(mapStateToProps)(App);
export default function NCAP() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}


