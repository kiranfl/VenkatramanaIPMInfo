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
import rootReducer from './src/store/reducers/reducers';
import { Components } from './src/utils/declareComponents'

const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();
const stackConfiguration = {
  title: 'IPMInfo',
  headerStyle: {
    backgroundColor: '#FFC300',
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeft: null,
}
function Apps() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Components.SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Language" component={Components.LanguageScreen} options=
          {stackConfiguration}
        />
        <Stack.Screen name="Home" component={Components.CropListsScreen} options=
          {stackConfiguration}
        />
        <Stack.Screen name="CropsDetails" component={Components.CropsDetailsScreen} options=
          {{ headerShown: false }}
        />
        <Stack.Screen name="SelectedCropsDetailsScreen" component={Components.SelectedCropsDetailsScreen} options=
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


