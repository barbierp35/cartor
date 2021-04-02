import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import playersReducer from './store/reducers/PlayersReducer';
import PlayersScreen from './screens/PlayersScreen';
import CardsScreen from './screens/CardsScreen';

function Players() {
  return (
    <PlayersScreen/>
  );
}

function Cards() {
  return (
    <CardsScreen/>
  );
}

const Tab = createBottomTabNavigator();

const store = createStore(playersReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Joueurs" component={Players} />
          <Tab.Screen name="Cartes" component={Cards} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
