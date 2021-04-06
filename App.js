import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import allReducer from './store/reducers'
import PlayersScreen from './screens/PlayersScreen';
import CardsScreen from './screens/CardsScreen';

function Players() {
  return (
    <ImageBackground
      style={ styles.imgBackground } 
      resizeMode='cover' 
      source={require('./assets/background.jpg')}>
      <PlayersScreen/>
    </ImageBackground>
  );
}

function Cards() {
  return (
    <ImageBackground
      style={ styles.imgBackground } 
      resizeMode='cover' 
      source={require('./assets/background.jpg')}>
      <CardsScreen/>
    </ImageBackground>
  );
}

const Tab = createBottomTabNavigator();

const store = createStore(allReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Joueurs"
            component={Players}
            options={{
              tabBarLabel: 'Joueurs',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-group" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cartes"
            component={Cards}
            options={{
              tabBarLabel: 'Cartes',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  }
});
